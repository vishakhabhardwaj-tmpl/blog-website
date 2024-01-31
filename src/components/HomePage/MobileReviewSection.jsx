import React from "react";
import MobileCard from "../Cards/MobileCard";

const MobileReviewSection = ({ blog }) => {
  return (
    <div className="mobile-review-section">
      {blog?.map((blogData) => (
        <MobileCard
          key={blogData?.id}
          title={blogData.title}
          imageurl={blogData.bannerImgLink}
          Date={blogData.createdAt}
          readTime={blogData.readTime}
        />
      ))}
    </div>
  );
};

export default MobileReviewSection;
