// import React from 'react'
import "../StyleHome.css"
import slide2 from '../../../../assets/image/slide2.png'
import slide1 from '../../../../assets/image/slide1.png'
// import { Carousel } from "react-bootstrap";

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const Carousel = () => {
  const options = {
    loop: true,
    center: true,
    margin: 30,
    items: 1,
    responsive:{
      600:{
          items:1
      }
    },
    autoplay: true
  };
  return (
    <div className="container mt-5">
          <OwlCarousel className="owl-theme mt-5" {...options}>
      <div className="item mt-5">
        <img src={slide1} alt='' />
      </div>
      <div className="item mt-5">
      <img src={slide2} alt='' />
      </div>
      <div className="item mt-5">
      <img src={slide1} alt='' />
      </div>
    </OwlCarousel>
    </div>

  );
};
export default Carousel;
