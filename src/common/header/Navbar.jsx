import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./images/348363434_1311525329398934_2469258509730488060_n.jpg" alt="Logo" />
      </div>
      <div className="header-middle">
        <div className="search-bar">
          <div className="search-input">
            <input type="text" placeholder="Search" />
            <img className="search-icon" src="./images/search-icon.png" alt="Search" />
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
            
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/productCart">Product</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cart">
        <img src="./images/download.png" alt="Cart" />
        <span>0</span>
      </div>
    </header>
  );
};

export default Navbar;
