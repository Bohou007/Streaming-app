import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <footer id="contact" className="footer-one iq-bg-dark">
          {/* Address */}
          <div className="footer-top">
            <div className="container-fluid">
              <div className="row footer-standard">
                <div className="col-lg-7">
                  <div className="widget text-left">
                    <div className="menu-footer-link-1-container">
                      <ul id="menu-footer-link-1" className="menu p-0">
                        <li
                          id="menu-item-7314"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314"
                        >
                          <NavLink to="#">Terms Of Use</NavLink>
                        </li>
                        <li
                          id="menu-item-7316"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7316"
                        >
                          <NavLink to="../html/privacy-policy.html">
                            Privacy-Policy
                          </NavLink>
                        </li>
                        <li
                          id="menu-item-7118"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118"
                        >
                          <NavLink to="../html/faq.html">FAQ</NavLink>
                        </li>
                        <li
                          id="menu-item-7118"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118"
                        >
                          <NavLink to="../html/watch-video.html">
                            Watch List
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget text-left">
                    <div className="textwidget">
                      <p>
                        <small>
                          © 2021 STREAMIT. All Rights Reserved. All videos and
                          shows on this platform are trademarks of, and all
                          related images and content are the property of,
                          Streamit Inc. Duplication and copy of this is strictly
                          prohibited. All rights reserved.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 mt-4 mt-lg-0">
                  <h6 className="footer-link-title">Follow Us :</h6>
                  <ul className="info-share">
                    <li>
                      <NavLink target="_blank" to="#">
                        <i className="fa fa-facebook" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink target="_blank" to="#">
                        <i className="fa fa-twitter" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink target="_blank" to="#">
                        <i className="fa fa-google-plus" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink target="_blank" to="#">
                        <i className="fa fa-github" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                  <div className="widget text-left">
                    <div className="textwidget">
                      <h6 className="footer-link-title">Streamit App</h6>
                      <div className="d-flex align-items-center">
                        <NavLink className="app-image" to="#">
                          <img
                            src="../html/images/footer/01.jpg"
                            alt="play-store"
                          />
                        </NavLink>
                        <br />
                        <NavLink className="ml-3 app-image" to="#">
                          <img
                            src="../html/images/footer/02.jpg"
                            alt="app-store"
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Address END */}
        </footer>
      </>
    );
  }
}

export default Footer;
