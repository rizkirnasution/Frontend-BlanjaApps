
import "../StyleHome.css"
import category1 from '../../../../assets/image/category1.png'
import category2 from '../../../../assets/image/category2.png'
import category3 from '../../../../assets/image/category3.png'
import category5 from '../../../../assets/image/category5.png'
import category6 from '../../../../assets/image/category6.png'
import category7 from '../../../../assets/image/category7.png'
import category8 from '../../../../assets/image/category8.png'
import category9 from '../../../../assets/image/category9.png'
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const Carousel = () => {
  const options = {
    loop: true,
    center: true,
    margin: 30,
    items: 3,
    responsive:{
      600:{
          items:1
      }
    },
    autoWidth:true,
    autoplay: true
  };
  return (
    <div className="container mt-5 md-3">
          <OwlCarousel className="owl-theme mt-5" {...options}>
      <div className="item mt-5">
        <img src={category1} alt='' />
      </div>
      <div className="item mt-5">
      <img src={category2} alt='' />
      </div>
      <div className="item mt-5">
      <img src={category3} alt='' />
      </div>
      <div className="item mt-5">
      <img src={category5} alt='' />
      </div>
      <div className="item mt-5">
      <img src={category6} alt='' />
      </div>
      <div className="item mt-5">
      <img src={category7} alt='' />
      </div>
      <div className="item mt-5">
      <img src={category8} alt='' />
      </div>
      <div className="item mt-5">
      <img src={category9} alt='' />
      </div>

    </OwlCarousel>
    </div>

  );
};
export default Carousel;
