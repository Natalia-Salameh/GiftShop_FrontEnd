import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    pauseOnHover: false 
  };

  return (
    <div className="slider-container"> {/* Wrap the Slider component in a container */}
      <Slider {...settings}>
        {Sdata.map((value) => (
          <div key={value.id}>
            <div>
              <img src={value.cover} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideCard;
