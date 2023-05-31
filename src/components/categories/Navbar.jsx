import React from "react";
import { Link } from "react-router-dom";
import ProductSearchInput from "../search";

const Navbar = () => {
  // Simulating cart items count
  const cartItemsCount = 3; // Replace with your logic to get the actual cart count

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="./images/p2.png" alt="Logo" />
        </Link>
      </div>
      <div className="header-middle">
        <div className="search-bar">
          <div className="search-input">
            <ProductSearchInput />
          </div>
        </div>
        <nav className="navlink">
          <ul>
            <li>
              <Link to="/candles">Candles</Link>
            </li>
            <li>
              <Link to="/ceramic">Ceramic</Link>
            </li>
            <li>
              <Link to="/crochet">Crochet</Link>
            </li>
            <li>
              <Link to="/resin">Resin</Link>
            </li>
            <li>
              <Link to="/woodArt">Wood Art</Link>
            </li>
            <li>
              <Link to="/embroidery">Embroidery</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cart">
        <Link to="/login" className="login-button">
          <img src="./images/p3.png" alt="Login" />
          <span>Login</span>
        </Link>
        <Link to="/signup" className="signup-button">
          <img src="./images/My project.png" alt="SignUp" />
          <span>SignUp</span>
        </Link>
        <Link to="/cart">
          <div className="cart-icon">
            <img src="./images/p4.png" alt="Cart" />
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
