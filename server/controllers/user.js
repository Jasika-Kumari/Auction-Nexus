const jwt = require("jsonwebtoken");
const User = require("../models/User");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Bad request. Please add email and password in the request body",
    });
  }

  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    const isMatch = await foundUser.comparePassword(password);

    if (isMatch) {
      const token = jwt.sign(
        { id: foundUser._id, name: foundUser.name },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );

      return res.status(200).json({ message: "User logged in", token });
    } else {
      return res.status(400).json({ message: "Invalid password" });
    }
  } else {
    return res.status(400).json({ message: "Invalid credentials" });
  }
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    message: `Hello, ${req.user.name}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

const getAllUsers = async (req, res) => {
  let users = await User.find({});

  return res.status(200).json({ users });
};

const register = async (req, res) => {
  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser === null) {
    let { firstName, lastName, email, password, role, address, aadhaar, employeeId, department, city, phone } = req.body;
    if (firstName && lastName && email && password && role) {
      const person = new User({
        name: `${firstName} ${lastName}`,
        email,
        password,
        role,
        address: role === 'User' ? address : undefined,
        aadhaar: role === 'User' ? aadhaar : undefined,
        employeeId: role === 'Employee' ? employeeId : undefined,
        department: role === 'Employee' ? department : undefined,
        city,
        phone
      });
      await person.save();
      return res.status(201).json({ message: "User registered successfully", person });
    } else {
        return res.status(400).json({ message: "Please add all required values in the request body" });
    }
  } else {
    return res.status(400).json({ message: "Email already in use" });
  }
};

module.exports = {
  login,
  register,
  dashboard,
  getAllUsers,
};
