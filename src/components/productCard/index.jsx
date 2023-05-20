import React from 'react';

const ProductCard = ({ productList }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={productList.image} alt={productList.name} />
      </div>
      <div className="product-details">
         <h3>{productList.name}</h3>
          <p>{productList.price} $</p>
      </div>
    </div>
  );
};

export default ProductCard;

