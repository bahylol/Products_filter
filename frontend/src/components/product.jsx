import React from 'react';
import '../App.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <h2 className="name">{product.name}</h2>
      <p className="description">{product.description}</p>
      <p className="category"><strong>Category:</strong> {product.category}</p>
      <p className="brand"><strong>Brand:</strong> {product.brand}</p>
      <p className="price"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
