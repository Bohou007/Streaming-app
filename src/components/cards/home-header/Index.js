import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import Slider from "react-slick";

import SlideHeader from "./SlideHeader";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      className: "slider m-0 p-0",
      draggable: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        <section id="home" className="iq-main-slider p-0 iq-rtl-direction">
          <Slider id="home-slider" {...settings}>
            <SlideHeader bg={" slick-bg s-bg-1"} index={1} />
            <SlideHeader bg={" slick-bg s-bg-2"} index={2} />
            <SlideHeader bg={" slick-bg s-bg-3"} index={3} />
          </Slider>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="44px"
              height="44px"
              id="circle"
              fill="none"
              stroke="currentColor"
            >
              <circle r={20} cy={22} cx={22} id="test" />
            </symbol>
          </svg>
        </section>
      </>
    );
  }
}
