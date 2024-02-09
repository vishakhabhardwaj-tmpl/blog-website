import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./CustomArrows.css";

const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-prev-arrow" onClick={onClick}>
    <SlArrowLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-next-arrow" onClick={onClick}>
    <SlArrowRight />
  </button>
);

export { CustomPrevArrow, CustomNextArrow };
