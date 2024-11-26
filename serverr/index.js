const express = require("express");
const app = express();
const cors = require("cors");
const http = require('http').Server(app);
const fs = require("fs");
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Read data from JSON file
const getData = () => {
    const savedData = fs.readFileSync("data.json");
    return JSON.parse(savedData);
};

// Write data to JSON file
const saveData = (data) => {
    const stringData = JSON.stringify(data, null, 2);
    fs.writeFileSync("data.json", stringData);
};

// Update product with new bid
function findProduct(nameKey, myArray, last_bidder, amount) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            myArray[i].last_bidder = last_bidder;
            myArray[i].price = amount;
        }
    }
    saveData({ products: myArray });
}

// Socket.IO connection
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });

    socket.on('addProduct', (data) => {
        let objectData = getData();
        objectData.products.push(data);
        saveData(objectData);
        socket.broadcast.emit("addProductResponse", data);
    });

    socket.on("bidProduct", (data) => {
        let objectData = getData();
        findProduct(data.name, objectData.products, data.last_bidder, data.amount);
        socket.broadcast.emit("bidProductResponse", data);
    });
});

// API endpoint to get products
app.get("/api", (req, res) => {
    try {
        const products = getData();
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Error fetching products");
    }
});

app.post("/api/addProduct", (req, res) => {
    try {
        let objectData = getData();
        const newProduct = req.body;
        objectData.products.push(newProduct);
        saveData(objectData);
        res.json({ success: true, product: newProduct });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send("Error adding product");
    }
});

// Start server
http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
 