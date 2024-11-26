import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      fetch("http://localhost:4000/api")
        .then(res => res.json())
        .then(data => {
          setProducts(data.products);
          setLoading(false);
        });
    };
    fetchProducts();
  }, []);

  return (
    <div className="products__container">
      <div className='table__wrapper'>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Title of product</th>
              <th>Organization Name</th>
              <th>Date of auction</th>
              <th>Time of auction</th>
              <th>Bid</th>
              <th>Auction id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7">Loading...</td>
              </tr>
            ) : (
              products.map(product => (
                <tr key={product.auctionId}>
                  <td>{product.name}</td>
                  <td>{product.organizationName}</td>
                  <td>{product.auctionDate}</td>
                  <td>{product.auctionTime}</td>
                  <td>{product.price}</td>
                  <td>{product.auctionId}</td>
                  <td>
                    <Link to={`/products/bid/${product.name}/${product.price}`} className='bid__button'>Bid</Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
