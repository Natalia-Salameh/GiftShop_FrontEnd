import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="x">
        <div className="box">
        <img src="./images/Asset 1.svg" alt="" />
          <ul>
            <b><li>Natalia Salameh</li></b>
            <b><li>Seleena Shomali</li></b>
            <b><li>Shahd Ghayadah</li></b>
          </ul>
        </div>

        <div className="box">
          <h2>About Us</h2>
          <ul>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="box">
          <h2>Customer Care</h2>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
        <div className="box">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: Curio.help@gmail.com</li>
            <li>Phone: +972 563856285</li>
          </ul>
        </div>
      </div>
      <div className="copy-right">
        &copy; {new Date().getFullYear()} Curio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
