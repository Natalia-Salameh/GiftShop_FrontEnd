import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { CartContext } from '../../components/AddToCart/cartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Zoom from '../../components/zoom/zoom';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:8080/products/id/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const squareStyle = {
    width: '15px',
    height: '15px',
    backgroundColor: product.colour,
    display: 'inline-block',
    marginRight: '10px' // Adding some spacing between the square and text
  };
  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    toast.success('Product added to cart successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 2000,
      icon:false
    });
  };

  return (
    <>
    {/* <Zoom/> */}
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
          </h2>
          <p className="desc">{product.description}</p>
          <div className="buttons">
            <button className="add" onClick={handleAddToCart}>Add to Cart</button>
            <button className="like"><span>♥</span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
