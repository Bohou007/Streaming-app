import { Icon } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <>
      <NavLink
        to="#"
        style={{ ...style }}
        onClick={onClick}
        className="slick-arrow slick-prev"
      >
        <i className="fa fa-chevron-left"></i>
      </NavLink>
    </>
  );
}

export default PrevArrow;
