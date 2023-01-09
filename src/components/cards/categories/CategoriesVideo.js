import React, { Component } from "react";
import Slider from "react-slick";

import NextArrow from "../videos/arrowVideo/NextArrow";
import PrevArrow from "../videos/arrowVideo/PrevArrow";
import CardCategory from "./CardCategory";

import url1 from "../../../assets/images/favorite/01.jpg";
import url2 from "../../../assets/images/favorite/02.jpg";
import url3 from "../../../assets/images/favorite/03.jpg";
import url4 from "../../../assets/images/favorite/04.png";
import url5 from "../../../assets/images/favorite/05.jpg";

class CategoriesVideo extends Component {
  render() {
    const settings = {
      className: "slider m-0 p-0",
      draggable: true,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 overflow-hidden">
                <ul className="favorites-slider list-inline p-0 mb-0 iq-rtl-direction slick-initialized slick-slider">
                  <Slider {...settings}>
                    <CardCategory url={url1} />
                    <CardCategory url={url5} />
                    <CardCategory url={url3} />
                    <CardCategory url={url2} />
                    <CardCategory url={url3} />
                  </Slider>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CategoriesVideo;
