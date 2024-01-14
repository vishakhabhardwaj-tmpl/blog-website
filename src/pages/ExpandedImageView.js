import React from 'react';

const ExpandedImageView = ({ image }) => {
  return (
    <div className="expanded-image-view">
      <img src={image.url} alt={image.title} />
      <div className="image-details">
        <h3>{image.title}</h3>
        <p>Rating: {image.rating}</p>
      </div>
    </div>
  );
};

export default ExpandedImageView;
