import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = ({ socket }) => {
  const [productData, setProductData] = useState({
    name: '',
    organizationName: '',
    auctionDate: '',
    auctionTime: '',
    price: '',
    auctionId: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/api/addProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    }).then(res => res.json())
      .then(data => {
        if (data.success) {
          socket.emit('addProduct', data.product);
          navigate('/products');
        } else {
          alert('Failed to add product');
        }
      }).catch(err => {
        console.error("Error submitting product:", err);
        alert('Failed to add product');
      });
  };

  return (
    <div className="add-product__container">
      <div className="add-product__wrapper">
        <h1 className="add-product__header">Add New Product</h1>
        <form className="add-product__form" onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Product Name"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              className="input"
              name="organizationName"
              placeholder="Organization Name"
              value={productData.organizationName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="date"
              className="input"
              name="auctionDate"
              placeholder="Auction Date"
              value={productData.auctionDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="time"
              className="input"
              name="auctionTime"
              placeholder="Auction Time"
              value={productData.auctionTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="number"
              className="input"
              name="price"
              placeholder="Starting Price"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              className="input"
              name="auctionId"
              placeholder="Auction ID"
              value={productData.auctionId}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="add-product__cta">ADD PRODUCT</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
