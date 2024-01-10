import React, { useState } from 'react';
import './ShareButton.css'; // Import your CSS file with the styles

const ShareButton = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const toggleShareMenu = () => {
    setShowShareMenu(!showShareMenu);
  };

  const shareOnSocialMedia = (platform) => {
    // Implement the logic to share on the specific social media platform here
    // For simplicity, we'll just log the platform to the console
    console.log("Sharing on " + platform);
  };

  return (
    <div className="share-container">
      <button className="dots-button" onClick={toggleShareMenu}>...</button>
      {showShareMenu && (
        <div className="share-menu">
          <a href="#" onClick={() => shareOnSocialMedia('facebook')}>Share on Facebook</a>
          <a href="#" onClick={() => shareOnSocialMedia('twitter')}>Share on Twitter</a>
          <a href="#" onClick={() => shareOnSocialMedia('linkedin')}>Share on LinkedIn</a>
          <a href="#" onClick={() => shareOnSocialMedia('instagram')}>Share on Instagram</a>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
