import React from "react";

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-nav prev-arrow slick-arrow"
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

export default SamplePrevArrow;
