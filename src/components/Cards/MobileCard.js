import React from "react";
import { Link } from "react-router-dom";

const MobileCard = ({ title, imageurl, Date }) => {
  return (
    <div className="mobile-card">
      <Link to="/blog/1">
        <div className="mobile-card-content">
          <div className="mobile-card-title">{title}</div>
          <div className="mobile-card-date">{Date}</div>
        </div>

        <div className="mobile-card-image">
          <img src={imageurl} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default MobileCard;
