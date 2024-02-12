import React from "react";
import { Link } from "react-router-dom";
import "./SingleBlogSideBar.css";

const SingleBlogSideBar = ({ detailedDescription, profileImageLink }) => {
  console.log(profileImageLink);
  return (
    <div className="singlesidebar">
      <div className="about-me">
        <h2>About Me</h2>
        <hr />
        <div className="imageauthor">
          <img src={profileImageLink} />
        </div>
        <p>{detailedDescription}</p>
        <Link to="/about">
          <button>Read More</button>
        </Link>
        <hr />
      </div>
      <div className="postarchieve">
        <h2>PostsArchive</h2>
        <hr />
        <div className="postbutton">
          <Link to="/blog/:blogId">
            <button>March 2023(9)</button>
          </Link>
          <hr />
        </div>
      </div>
      <div className="tags">
        <h2>Tags</h2>
        <hr />
        <div className="tagbuttons">
          <Link to="/">
            <button>Movie</button>
          </Link>
          <Link to="/">
            <button>Review</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogSideBar;
