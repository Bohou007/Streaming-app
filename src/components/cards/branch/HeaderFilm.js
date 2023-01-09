import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HeaderFilm extends Component {
  render() {
    return (
      <>
        <NavLink href="movie-details.html" tabIndex={-1}>
          <div className="shows-img">
            <img
              src="https://templates.iqonic.design/streamit/frontend/html/images/movie-banner/1.jpg"
              className="w-100"
              alt=""
            />
            <div className="shows-content">
              <h4 className="text-white mb-1">Jumbo Queen</h4>
              <div className="movie-time d-flex align-items-center">
                <div className="badge badge-secondary p-1 mr-2">9+</div>
                <span className="text-white">2h 40m</span>
              </div>
            </div>
          </div>
        </NavLink>
      </>
    );
  }
}

export default HeaderFilm;
