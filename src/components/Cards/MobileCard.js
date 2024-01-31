import React from "react";
import { Link } from "react-router-dom";
import "./MobileCard.css";
import moment from "moment";

const MobileCard = ({ title, imageurl, Date, readTime }) => {
  const formattedDate = moment(Date).format("MMMM DD, YYYY");
  return (
    <>
      <Link to="/blog/1">
        <div className="mobile-card">
          <div className="mobile-card-content">
            <div className="mobile-card-title">{title}</div>
            <div className="mobile-card-date">
              {formattedDate} . {readTime}
            </div>
          </div>

          <div className="mobile-card-image">
            <img src={imageurl} alt="" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default MobileCard;
