import React from "react";

function SampleNextArrow(props) {
  const { style, onClick } = props;

  return (
    <div
      className="slick-nav next-arrow slick-arrow"
      style={{ ...style }}
      onClick={onClick}
    >
      <i />
      <svg>
        <use xlinkHref="#circle" />
      </svg>
    </div>
  );
}

export default SampleNextArrow;
