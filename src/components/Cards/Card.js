import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ title, imageurl, shortdescription, Date, id }) => {
  return (
    <div className="card-container">
      <Link to={`/blog/${id}`}>
        <div className="image-container">
          <img src={imageurl} alt="" />
        </div>
        <div className="card-content">
          <div className="date">{Date}</div>
          <div className="card-title">{title}</div>
          <div className="card-body">
            <p>{shortdescription}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
