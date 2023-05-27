import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/products/id/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  const squareStyle = {
    width: '15px',
    height: '15px',
    backgroundColor: product.colour,
    display: 'inline-block',
    marginRight: '10px' // Adding some spacing between the square and text
  };

  return (
    <>
      <div className="contai">
        <div className="images">
          <img className='img' src={product.image} alt={product.name} />
        </div>
        <div className="slideshow-buttons">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        <div className="product">
          <h1 className='h1'>{product.name}</h1>
          <h2 className='h2'>${product.price}</h2>
          <h2 className='h3'>
          Product colour: <span className="square" style={squareStyle}></span>
        </h2>          <p className="desc">{product.description}</p>
          <div className="buttons">
            <button className="add">Add to Cart</button>
            <button className="like"><span>♥</span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
