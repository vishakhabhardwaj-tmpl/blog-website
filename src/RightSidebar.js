// RightSidebar.js

import React from 'react';
import './RightSidebar.css'; // Make sure to create this CSS file
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="social-media-link">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <CiTwitter />
        </a>
      </div>
      <div className="social-media-link">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <SlSocialFacebook />
          
        </a>
      </div>
      <div className="social-media-link">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram/>
          
        </a>
      </div>
    </div>
  );
};

export default RightSidebar;
