import React, { useContext } from "react";
import ProductSearchInput from "../search";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/AddToCart/cartContext";
import "./header.css";
import Badge from '@mui/material/Badge';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  const cartItemsCount = cartItems.length;

  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img src="./images/Asset 1.svg" />
        </Link>
      </div>
      <div className="header-components">
        <div className="header-search">
          <ProductSearchInput />
        </div>
        <div className="header-user">
          <Link to="/login">
            <i className="bi bi-person"></i>
          </Link>
        </div>
        <div className="header-cart">
          <Link to="/cart">
          <i className="bi bi-bag"></i>
          {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
