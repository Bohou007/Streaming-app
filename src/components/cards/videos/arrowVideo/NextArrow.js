import React from "react";
import { NavLink } from "react-router-dom";

function NextArrow(props) {
  const { style, onClick } = props;

  return (
    <>
      <NavLink
        to="#"
        style={{ ...style }}
        onClick={onClick}
        className="slick-arrow slick-next"
      >
        <i className="fa fa-chevron-right" />
      </NavLink>
    </>
  );
}

export default NextArrow;
