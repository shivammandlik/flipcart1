import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function CustomPaging() {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          {/* <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20" /> */}
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/aae68becafc4f425.jpeg?q=20" />
        </div>
                <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/aae68becafc4f425.jpeg?q=20" />
        </div>

        
      </Slider>
    </div>
  );
}

export default CustomPaging;
