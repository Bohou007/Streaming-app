import React, { Component } from "react";

import NavbarCollapse from "./navItem/NavbarCollapse";
import NavbarRight from "./navItem/NavbarRight";
import NavItem from "./navItem/NavItem";
import Navlogo from "./navLogo/Navlogo";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <header id="main-header" className="">
          <div className="main-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <NavbarCollapse />
                    <Navlogo />
                    <NavItem />
                    <NavbarRight />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
