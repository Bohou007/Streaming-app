import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../../../FrontMenuItems";

class NavItem extends Component {
  render() {
    const mainContent = AppRoutes.items.map((route, index) => {
      return (
        <li className="menu-item" key={index}>
          <NavLink to={route.url}>{route.title}</NavLink>
        </li>
      );
    });
    return (
      <>
        <div
          className="navbar-collapse collapse"
          id="navbarSupportedContent"
          style={{}}
        >
          <div className="menu-main-menu-container">
            <ul id="top-menu" className="navbar-nav ml-auto">
              {mainContent}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default NavItem;
