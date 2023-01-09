import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import url1 from "../../../assets/images/favorite/05.jpg";

class CardCategory extends Component {
  render() {
    return (
      <>
        <li className="slide-item">
          <NavLink to="show-details.html" className="">
            <div className="block-images position-relative img-overlay">
              <div className="img-box">
                <img src={this.props.url} className="img-fluid" alt="" />
              </div>
              <div className="block-description">
                <h6 className="iq-title title-size">
                  <NavLink to="show-details.html" className="">
                    Last Race
                  </NavLink>
                </h6>
                <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
                  <div className="badge badge-secondary p-1 mr-2">+7</div>
                  <span className="text-white">Videos</span>
                </div>
              </div>
            </div>
          </NavLink>
        </li>
      </>
    );
  }
}

export default CardCategory;
