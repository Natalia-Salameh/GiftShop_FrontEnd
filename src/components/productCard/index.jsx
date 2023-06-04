import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/AddToCart/cartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./product.css";

const ProductCard = ({ productList }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ ...productList, quantity: 1 });
    toast.success("Product added to cart successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <Link to={`/products/id/${productList.id}`}>
          <img src={productList.image} alt={productList.name} />
        </Link>
      </div>
      <div className="details-container">
        <p className="product-name">{productList.name}</p>
        <div className="price-and-button">
          <p className="product-price">{productList.price}$</p>
          <button onClick={handleAddToCart} className="addd-button">
            <i className="bi bi-plus-square"></i> </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
