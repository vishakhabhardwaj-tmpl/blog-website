import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./CustomArrows.css";

const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-prev-arrow" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-next-arrow" onClick={onClick}>
    <FaChevronRight />
  </button>
);

export { CustomPrevArrow, CustomNextArrow };
