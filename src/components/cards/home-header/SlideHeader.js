import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";

class SlideHeader extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ isOpen: true });
    alert("khberfbkbfrbhf");
    console.log("test dcdc");
  }
  render() {
    const { index, ...props } = this.props;
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "64%",
      height: "500px",
      bgcolor: "#000000",
      border: "2px solid #000",
      boxShadow: 24,
    };
    return (
      <div className={props.bg} id="home-slider">
        <div className="container-fluid position-relative h-100">
          <div className="slider-inner h-100">
            <div className="row col-lg-12 align-items-center  iq-ltr-direction h-100 ">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <h1
                  className="slider-text big-title title text-uppercase fadeInLeft animated"
                  data-animation-in="fadeInLeft"
                  data-delay-in="0.6"
                  style={{ opacity: 1, animationDelay: "0.6s" }}
                >
                  bushland
                </h1>
                <div
                  className="d-flex flex-wrap align-items-center fadeInLeft animated"
                  data-animation-in="fadeInLeft"
                  style={{ opacity: 1 }}
                >
                  <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
                    <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star-half" aria-hidden="true" />
                      </li>
                    </ul>
                    <span className="text-white ml-2">4.7(lmdb)</span>
                  </div>
                  <div className="d-flex align-items-center mt-2 mt-md-3">
                    <span className="badge badge-secondary p-2">18+</span>
                    <span className="ml-3">2 Seasons</span>
                  </div>
                  <p
                    data-animation-in="fadeInUp"
                    data-delay-in="1.2"
                    style={{ opacity: 1, animationDelay: "1.2s" }}
                    className="fadeInUp animated"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  {/* <div class="d-flex align-items-center" data-animation-in="fadeInUp" data-delay-in="1">
                               
                              <span class="badge badge-secondary p-2">18+</span>
                              <span class="ml-3">2 Seasons</span>
                           </div> */}
                </div>
                <div
                  className="trending-list"
                  data-wp_object-in="fadeInUp"
                  data-delay-in="1.2"
                >
                  <div className="text-primary title starring">
                    Starring:{" "}
                    <span className="text-body">
                      Karen Gilchrist, James Earl Jones
                    </span>
                  </div>
                  <div className="text-primary title genres">
                    Genres: <span className="text-body">Action</span>
                  </div>
                  <div className="text-primary title tag">
                    Tag:{" "}
                    <span className="text-body">Action, Adventure, Horror</span>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center r-mb-23 fadeInUp animated"
                  data-animation-in="fadeInUp"
                  data-delay-in="1.2"
                  style={{ opacity: 1, animationDelay: "1.2s" }}
                >
                  <NavLink
                    to="show-details.html"
                    className="btn btn-hover iq-button"
                    tabIndex={0}
                  >
                    <i className="fa fa-play mr-2" aria-hidden="true" />
                    Play Now
                  </NavLink>
                  <NavLink
                    to="show-details.html"
                    className="btn btn-link"
                    tabIndex={0}
                  >
                    More details
                  </NavLink>
                </div>
              </div>

              <div className="col-xl-5 col-lg-12 col-md-12 trailor-video text-center">
                <Modal
                  open={this.state.showModal}
                  onClose={this.handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <CardMedia
                    sx={style}
                    component="iframe"
                    image="https://www.youtube.com/embed/6rpXIm41scw?autoplay=1;rel=1&loop=1&showinfo=0"
                    controls
                    autoPlay
                  />
                </Modal>
                <NavLink
                  to="#"
                  className="playbtn"
                  onClick={this.handleOpenModal}
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 213.7 213.7"
                    enableBackground="new 0 0 213.7 213.7"
                    xmlSpace="preserve"
                  >
                    <polygon
                      className="triangle"
                      fill="none"
                      strokeWidth={7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      points="73.5,62.5 148.5,105.8 73.5,149.1 "
                    />
                    <circle
                      className="circle"
                      fill="none"
                      strokeWidth={7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    />
                  </svg>
                  <span className="w-trailor">Watch Trailer</span>
                </NavLink>
                {/* </React.Fragment> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideHeader;
