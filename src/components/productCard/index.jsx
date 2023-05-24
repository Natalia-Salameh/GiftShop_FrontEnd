import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ productList }) => {
  return (
    <Link to={`/products/${productList.id}`}>
    <div className="product-card">
      <div className="image-container">
        <img src={productList.image} alt={productList.name} />
      </div>
      <div className="product-details">
         <h3>{productList.name}</h3>
          <p>{productList.price} $</p>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;

