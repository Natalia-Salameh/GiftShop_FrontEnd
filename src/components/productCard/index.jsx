import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartContext } from '../../components/AddToCart/cartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductCard = ({ productList ,id}) => {
  // const { id } = useParams();
  // const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  const styles = {
    backgroundImage: `url(${productList.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
   
  };

  const handleAddToCart = () => {
    addToCart({ ...productList, quantity: 1 });
    toast.success('Product added to cart successfully!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  
  
  return (
//     <Link to={`/products/id/${productList.id}`}>
// <div className="container" style={styles}>

//       <div className="overlay">
//         <h2 className="head">{productList.name}</h2>
//         <hr />
//         <p className="price">
//         {productList.price}$  
//             </p>
//         <div className="cart">
//           <i className="fas fa-shopping-cart"></i>
//           <button onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//     </Link>

<div className="container" style={styles}>
<div className="overlay">
  <Link to={`/products/id/${productList.id}` } style={{ textDecoration: "none" , color: "inherit" }}>
    <h2 className="head">{productList.name}</h2>
    <hr />
    <p className="price">{productList.price}$</p>
  </Link>
  <div className="cart">
    <i className="fas fa-shopping-cart"></i>
    <button onClick={handleAddToCart}>Add to Cart</button>
  </div>
</div>
</div>
  );
};

export default ProductCard;

