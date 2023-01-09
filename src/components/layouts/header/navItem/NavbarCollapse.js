import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavbarCollapse extends Component {
  render() {
    return (
      <>
        <NavLink
          to="#"
          className="navbar-toggler c-toggler collapsed"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler-icon" data-toggle="collapse">
            <span className="navbar-menu-icon navbar-menu-icon--top" />
            <span className="navbar-menu-icon navbar-menu-icon--middle" />
            <span className="navbar-menu-icon navbar-menu-icon--bottom" />
          </div>
        </NavLink>
      </>
    );
  }
}
