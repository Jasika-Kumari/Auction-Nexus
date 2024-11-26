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
        })
        .catch(err => {
          console.error("Error fetching products:", err);
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
              <th>Product Name</th>
              <th>Bid amount</th>
              <th>Gmail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            ) : (
              products.map(product => (
                <tr key={product.auctionId}>
                  <td>{product.name}</td>
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
