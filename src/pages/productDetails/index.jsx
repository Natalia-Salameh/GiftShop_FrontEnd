import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { CartContext } from '../../components/AddToCart/cartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);
  const [currentPhoto, setCurrentPhoto] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/products/id/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setCurrentPhoto(data.image);
      });
  }, [id]);

  const photos = [
    '/images/zoom1.jpg',
    '/images/zoom2.jpg',
    '/images/zoom3.jpg',
    '/images/zoom4.jpg',
  ];

  const squareStyle = {
    width: '15px',
    height: '15px',
    backgroundColor: product.colour,
    display: 'inline-block',
    marginRight: '10px', // Adding some spacing between the square and text
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    toast.success('Product added to cart successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 2000,
      icon: false,
    });
  };

  const handlePhotoClick = (photo) => {
    setCurrentPhoto(photo);
  };

  return (
    <>
      <div className="contai">
        <div className="thumbnail-container">
          {photos.map((photo, index) => (
            <img
              key={index}
              className={`thumbnail ${currentPhoto === photo ? 'active' : ''}`}
              src={photo}
              alt={`Thumbnail ${index}`}
              onClick={() => handlePhotoClick(photo)}
            />
          ))}
        </div>
        <div className="images">
          <TransformWrapper>
            <TransformComponent>
              <img className="img" src={currentPhoto} alt={product.name} />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="product">
          <h1 className="h1">{product.name}</h1>
          <h2 className="h2">${product.price}</h2>
          <h2 className="h3">
            Product colour: <span className="square" style={squareStyle}></span>
          </h2>
          <p className="desc">{product.description}</p>
          <div className="buttons">
            <button className="add" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="like">
              <span>♥</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
