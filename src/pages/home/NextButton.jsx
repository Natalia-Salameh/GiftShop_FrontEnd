import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard';

const NextButton = (props) => {
  const handleClick = () => {
    // Perform the desired action or request here
    window.location.href = props.nextPage; // Use props to access the nextPage prop passed from the parent component
  };

  return (
    <button className="circular-button" onClick={handleClick}></button>
  );
};

export default NextButton;
