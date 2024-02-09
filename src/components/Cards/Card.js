import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import moment from "moment";

const Card = ({ title, imageurl, shortdescription, Date, id, readTime }) => {
  const formattedDate = moment(Date).format("MMMM DD, YYYY");
  return (
    <div className="card-container">
      <Link to={`/blog/${id}`}>
        <div className="image-container">
          <img src={imageurl} alt="" />
        </div>
        <div className="card-content">
          <div className="card-date">
            {formattedDate} . {readTime}
          </div>
          <h2 className="card-title">{title}</h2>
          <div className="card-body">
            <p>{shortdescription}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
