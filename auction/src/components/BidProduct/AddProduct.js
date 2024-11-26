import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = ({ socket }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    gmail: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, gmail } = productData;

    if (Number(price) <= 0) {
      setError('The starting price must be greater than 0');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, gmail }) // Only send the required fields
      });

      const data = await response.json();

      if (data.success) {
        socket.emit('productAdded', data.product); // Emit event to notify other clients
        navigate('/products');
      } else {
        setError('Failed to add product. Please try again.');
      }
    } catch (err) {
      console.error("Error submitting product:", err);
      setError('Failed to add product. Please try again.');
    }
  };

  return (
    <div className="add-product__container">
      <div className="add-product__wrapper">
        <h1 className="add-product__header">Fill details to place bid </h1>
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
              type="number"
              className="input"
              name="price"
              placeholder="Starting Price"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
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
          <button type="submit" className="add-product__cta">Place Bid</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

