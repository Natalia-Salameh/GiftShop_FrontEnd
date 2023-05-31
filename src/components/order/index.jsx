import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CheckoutButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn);
  }, []);

  const renderButton = () => {
    if (isLoggedIn) {
      return <Link to="/checkout">Checkout Order</Link>;
    } else {
      return <Link to="/login">Login to Checkout</Link>;
    }
  };

  return (
    <div>
      {renderButton()}
    </div>
  );
};

export default CheckoutButton;
