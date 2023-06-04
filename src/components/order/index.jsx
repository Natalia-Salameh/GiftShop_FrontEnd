import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Import the CSS file

const CheckoutButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn);
  }, []);

  const renderButton = () => {
    if (isLoggedIn) {
      return <Link to="/checkout" className="checkout-link">Checkout Order</Link>;
    } else {
      return <Link to="/login" className="checkout-link">Checkout</Link>;
    }
  };

  return (
    <div>
      {renderButton()}
    </div>
  );
};

export default CheckoutButton;
