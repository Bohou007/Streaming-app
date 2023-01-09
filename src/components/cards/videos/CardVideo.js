import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import race from "../../../assets/images/favorite/02.jpg";

class CardVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li className="slide-item">
        <div className="block-images position-relative">
          <div className="img-box">
            <img
              src={this.props.image_url}
              className="img-fluid card-img"
              alt=""
            />
          </div>
          <div className="block-description">
            <h6 className="iq-title">
              <NavLink to="show-details.html" tabIndex={-1}>
                Last Race
              </NavLink>
            </h6>
            <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
              <div className="badge badge-secondary p-1 mr-2">7+</div>
              <span className="text-white">2 Seasons</span>
            </div>
            <div className="hover-buttons">
              <NavLink
                to="movie-details.html"
                role="button"
                className="btn btn-hover iq-button"
                tabIndex={-1}
              >
                <i className="fa fa-play mr-1" aria-hidden="true" />
                Play Now
              </NavLink>
            </div>
          </div>
          <div className="block-social-info">
            <ul className="list-inline p-0 m-0 music-play-lists">
              <li className="share">
                <span>
                  <i className="ri-share-fill" />
                </span>
                <div className="share-box">
                  <div className="d-flex align-items-center">
                    <NavLink
                      to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-ico"
                      tabIndex={-1}
                    >
                      <i className="ri-facebook-fill" />
                    </NavLink>
                    <NavLink
                      to="https://twitter.com/intent/tweet?text=Currentlyreading"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-ico"
                      tabIndex={-1}
                    >
                      <i className="ri-twitter-fill" />
                    </NavLink>
                    <NavLink
                      to="#"
                      data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                      className="share-ico iq-copy-link"
                      tabIndex={-1}
                    >
                      <i className="ri-links-fill" />
                    </NavLink>
                  </div>
                </div>
              </li>
              <li>
                <span>
                  <i className="ri-heart-fill" />
                </span>
                <span className="count-box">19+</span>
              </li>
              <li>
                <span>
                  <i className="ri-add-line" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default CardVideo;
