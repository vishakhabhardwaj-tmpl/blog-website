import React, { useEffect, useState } from "react";
import Blog from "../components/singleblogpage/Blog";
import RecentPosts from "../components/singleblogpage/RecentPosts";
import SingleBlogSideBar from "../components/RecentCard/SingleBlogSideBar";
import "./SingleBlogPage.css";
import { useParams } from "react-router-dom";

const SingleBlogPage = () => {
  const id = useParams();
  const blogId = id?.blogId;
  console.log(blogId);
  const [singlepage, setSinglepage] = useState({});
  const getData = async () => {
    const url = `https://onmyscreen-backend.onrender.com/blogs/getOne/${blogId}`;
    const response = await fetch(url);
    const data = await response.json();

    setSinglepage(data);
    console.log(singlepage, data);
  };

  useEffect(() => {
    getData();
  }, [id]);
  console.log(singlepage, "data");
  return (
    <div className="blogpagemain">
      <div className="fullblog">
        <Blog
          shortdescription={singlepage?.shortDescription}
          imageUrl={singlepage?.bannerImgLink}
          heading={singlepage?.title}
          Date={singlepage?.createdAt}
          shortDescription={singlepage?.shortDescription}
          description={singlepage?.fullDescription}
          description1={singlepage?.fullDescription1}
          description2={singlepage?.fullDescription2}
          authorname={singlepage?.author?.name}
          time={singlepage?.readTime}
        />
        {/* <RecentPosts /> */}
      </div>
      <div className="blogsidebar">
        <SingleBlogSideBar
          detailedDescription={singlepage?.author?.detailedDescription}
          profileImageLink={singlepage?.author?.profileImageLink}
        />
      </div>
    </div>
  );
};

export default SingleBlogPage;
