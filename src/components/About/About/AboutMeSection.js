import React, { useState, useEffect } from "react";
import "./AboutMeSection.css";

const AboutMeSection = () => {
  const authorImageUrl =
    "https://static.wixstatic.com/media/e1bade_c9f7464c4b3f47328e7c4f26dbe60e77~mv2.jpg/v1/crop/x_496,y_1696,w_2550,h_3254/fill/w_356,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/About.jpg"; // Replace with the actual image URL
  const authorName = "Hi! I am Jane";

  const redirectToHomepage = () => {
    window.location.href = "/";
  };
  const [aboutData, setAboutData] = useState();
  const getabout = async () => {
    const url = "https://onmyscreen-backend.onrender.com/blogs/about";
    const about = await fetch(url);
    const data = await about.json();
    setAboutData(data);
    console.log(aboutData, data);
  };
  useEffect(() => {
    getabout();
  }, []);

  return (
    <div className="about-me-section">
      <h2>ABOUT ME</h2>
      <hr />
      <div className="author-section">
        <div className="author-image">
          <img src={aboutData?.profileImageLink} alt="Author" />
        </div>
        <div className="author-description">
          <h3>{aboutData?.name}</h3>
          <div className="aboutdescription">
            <h2 className="jane-description">{aboutData?.shortDescription}</h2>
            <p className="author-description-first-p">
              {" "}
              {aboutData?.detailedDescription}
            </p>
            <p className="author-description-first-p">
              {" "}
              {aboutData?.detailedDescription1}
            </p>
          </div>
          <button onClick={redirectToHomepage} className="blog-button">
            My Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
