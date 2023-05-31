import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({ productList , id}) => {

  const styles = {
    backgroundImage: `url(${productList.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
   
  };
  
  return (
    <Link to={`/products/id/${productList.id}`}>
<div className="container" style={styles}>

      <div className="overlay">
        <h2 className="head">{productList.name}</h2>
        <hr />
        <p className="price">
        {productList.price}$  
            </p>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;

