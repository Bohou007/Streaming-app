import React, { Component } from "react";
import Slider from "react-slick";
import NextArrow from "./arrowVideo/NextArrow";
import PrevArrow from "./arrowVideo/PrevArrow";
import CardVideo from "./CardVideo";

import { NavLink } from "react-router-dom";

class Video extends Component {
  render() {
    console.log(this.props.image_url);
    const cardVideo = this.props.image_url.map((image, index) => {
      // console.log(image.url);
      return image ? (
        <CardVideo
          key={index}
          image_url={image.url}
          cardTitle={this.props.cardTitle}
          render={(props) => <image.component {...props} />}
        />
      ) : null;
    });
    console.log(cardVideo);
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
        <section id="iq-favorites">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 overflow-hidden">
                <div className="iq-main-header d-flex align-items-center justify-content-between">
                  <h4 className="main-title">{this.props.cardTitle}</h4>
                  <NavLink className="iq-view-all" to="movie-category.html">
                    Voir Plus
                  </NavLink>
                </div>
                <div className="favorites-contens">
                  <ul className="favorites-slider list-inline row p-0 mb-0 iq-rtl-direction slick-initialized slick-slider">
                    <Slider id="home-slider" {...settings}>
                      {cardVideo}
                    </Slider>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Video;
