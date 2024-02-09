import React, { useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import "./Modal.css";
import { BsArrowsAngleExpand } from "react-icons/bs";

const Modal = ({
  image,
  onClose,
  showNavButtons,
  onPrev,
  onNext,
  ratingModal,
  foreverModal,
  expanded,
  expandedmodal,
}) => {
  console.log(expanded, "expandedexpanded");
  const modalRef = useRef(null);

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      modalRef.current.requestFullscreen();
      expandedmodal();
    }
  };

  return (
    <div className="Popup ${expanded ? 'expanded' : ''}" ref={modalRef}>
      <div className="image-button-section">
        <div className="mobile-modal-view">
          {ratingModal && (
            <div
              className={`modal-image ${
                expanded ? "expanded-modal-image" : ""
              }`}
              ref={modalRef}
            >
              <img src={image.ratingImage} alt={image.title} />
              <button className="modal-nav-button" onClick={onPrev}>
                <SlArrowLeft />
              </button>
              <button className="modal-nav-button2" onClick={onNext}>
                <SlArrowRight />
              </button>
            </div>
          )}
          {foreverModal && (
            <div
              className={`forever-modal-image ${
                expanded ? "expanded-modal-image" : ""
              }`}
              ref={modalRef}
            >
              <img src={image.movieImage} alt={image.title} />
              <button className="modal-nav-button" onClick={onPrev}>
                <SlArrowLeft />
              </button>
              <button className="modal-nav-button2" onClick={onNext}>
                <SlArrowRight />
              </button>
            </div>
          )}
        </div>{" "}
        {ratingModal && !expanded ? (
          <div className="modal-content">
            <h3>{image.title}</h3>
            <p>Rating: {image.rating}</p>
          </div>
        ) : null}
        {foreverModal && !expanded ? (
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
        {!expanded && (
          <button>
            <BsArrowsAngleExpand onClick={toggleFullScreen} />
          </button>
        )}
        <button onClick={onClose}>
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default Modal;
