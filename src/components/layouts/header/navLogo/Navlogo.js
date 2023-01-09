import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navlogo extends Component {
  render() {
    return (
      <>
        <NavLink className="navbar-brand" to="index.html">
          <img
            className="img-fluid logo"
            src="images/logo.png"
            alt="streamit"
          />
        </NavLink>
      </>
    );
  }
}

export default Navlogo;
