import React from "react";
import {
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { MdCloseFullscreen } from "react-icons/md";
import "./Modal.css";

const Modal = ({
  image,
  onClose,
  showNavButtons,
  onPrev,
  onNext,
  ratingModal,
  foreverModal,
}) => (
  <div className="Popup">
    <div className="image-button-section">
      <button className="modal-nav-button" onClick={onPrev}>
        <FaChevronLeft />
      </button>
      <div className="mobile-modal-view">
        {ratingModal ? (
          <div className="modal-image">
            <img src={image.ratingImage} alt={image.title} />
          </div>
        ) : null}
        {foreverModal ? (
          <div className="forever-modal-image">
            <img src={image.movieImage} alt={image.title} />
          </div>
        ) : null}

        <button className="modal-nav-button" onClick={onNext}>
          <FaChevronRight />
        </button>
      </div>
      {ratingModal ? (
        <div className="modal-content">
          <h3>{image.title}</h3>
          <p>Rating: {image.rating}</p>
        </div>
      ) : null}

      {foreverModal ? (
        <div className="forever-modal-content">
          <h3>I’m an image title</h3>
          <p>
            Describe your image here. Use catchy text to tell
            <br /> people the story behind the photo. <br />
            Go to “Manage Media” to add your content.
          </p>
        </div>
      ) : null}
    </div>
    <div className="modalbutton">
      <button>
        <MdCloseFullscreen />
      </button>
      <button onClick={onClose}>
        <IoCloseOutline />
      </button>
    </div>
  </div>
);

export default Modal;
