import React from 'react';

import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const { productList } = props;

  return (
    <Link to={`/products/${productList.id}`}>
      <div className="product-card">
        <div className="product-image">
          <img src={productList.image} />
        </div>
        <div>
          <h3>{productList.name}</h3>
          <p>{productList.price} $</p>
          <button> see More </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;