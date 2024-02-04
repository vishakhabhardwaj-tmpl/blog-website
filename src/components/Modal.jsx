import React from "react";
import {
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./Modal.css";

const Modal = ({ image, onClose, showNavButtons, onPrev, onNext }) => (
  <div className="Popup">
    <div className="image-button-section">
      <button className="modal-nav-button" onClick={onPrev}>
        <FaChevronLeft />
      </button>
      <div className="modal-image">
        <img src={image.ratingImage} alt={image.title} />
      </div>
      <button className="modal-nav-button" onClick={onNext}>
        <FaChevronRight />
      </button>
    </div>
    <div className="modal-content">
      <h3>{image.title}</h3>
      <p>Rating: {image.rating}</p>
    </div>
    <div className="modalbutton">
      <button>
        <FaExpand />
      </button>
      <button onClick={onClose}>
        <FaTimes />
      </button>
    </div>
  </div>
);

export default Modal;
