import React from "react";
import { Link } from "react-router-dom";
import "./RecentCard.css";

const RecentCard = ({ imageurl, heading }) => {
  return (
    <div className="container">
      <div className="RecentCardFirst">
        <Link to="/blog/1">
          <div className="recentImage">
            <img src={imageurl} alt="" />
          </div>
          <div className="recentHeading">
            <p>{heading}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecentCard;
