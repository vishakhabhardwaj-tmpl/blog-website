import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";

import "./Blog.css";
import RecentPosts from "./RecentPosts";
import moment from "moment";

const Blog = ({
  description,
  description1,
  description2,
  shortDescription,
  heading,
  date,
  imageUrl,
  authorname,
  time,
}) => {
  const formattedDate = moment(date).format("MMMM DD, YYYY");
  console.log(imageUrl);
  console.log(description);
  return (
    <div className="blog-section">
      <div className="blog-meta">
        <p>
          {" "}
          {authorname} . {formattedDate} . {time}{" "}
        </p>
      </div>
      <div className="blog-content">
        <h2>{heading}</h2>
        <p className="shortDescription">{shortDescription}</p>
        <div className="blog-image">
          <img src={imageUrl} alt={heading} />
        </div>
        <p className="description-below-image">{description}</p>
        <p className="description-below-image">{description1}</p>
        <p className="description-below-image">{description2}</p>
        <div className="button-container">
          <Link to="/">
            <button>Review</button>
          </Link>
          <Link to="/">
            <button>Movie</button>
          </Link>
        </div>

        <div className="horizontal-line"></div>

        <div className="social-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <RecentPosts />
    </div>
  );
};

export default Blog;
