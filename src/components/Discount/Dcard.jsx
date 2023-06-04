import React from "react";
import Data from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Dcard.css";

const Dcard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const calculateDiscount = (price, discountPercentage) => {
    const numericPrice = Number(price.replace("$", ""));
    const discount = (numericPrice * discountPercentage) / 100;
    return discount.toFixed(2);
  };

  return (
    <div className="dcard">
      <h2>All Products</h2>
      <Slider {...settings}>
        {Data.map((item, index) => (
          <div className="slide" key={index}>
            <div className="image-container">
              <img src={item.cover} alt={item.name} />
            </div>
            <div className="content">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Discount: {calculateDiscount(item.price, 10)}%</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Dcard;
