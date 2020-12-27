import React, { Component } from "react";
import Slider from "react-slick";
import Commennt from "./Comments"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      swipeToSlide: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3><Commennt/></h3>
          </div>
          <div>
          <h3><Commennt/></h3>
          </div>
          <div>
          <h3><Commennt/></h3>
          </div>
          <div>
          <h3><Commennt/></h3>
          </div>
          <div>
          <h3><Commennt/></h3>
          </div>
          <div>
          <h3><Commennt/></h3>
          </div>
        </Slider>
      </div>
    );
  }
}