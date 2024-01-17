import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";

import './Blog.css'

const Blog =() => {
      const admin = 'Admin';
      const date =  'March 22, 2023' ;
      const time = '1 min read' ;
      const heading = 'My Top 5 Movies of All Times';
      const shortDescription = 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.' ; 
      const imageUrl ='https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_440,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg'
      const descritption = '';


  return (
      <div className="blog-section">
        <div className="blog-meta">
          <p> {admin} . {date}  .  {time} </p>
        </div>
        <div className="blog-content">
          <h2>{heading}</h2>
          <p>{shortDescription}</p>
          <div className='blog-image'>
          <img src={imageUrl} alt={heading} />
          </div>
          <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. 
Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.
You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.
Create Relevant Content
Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content.
Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now.
          </p>
          <div className="button-container">
          <Link to="/"><button>Review</button></Link>
          <Link to="/"><button>Movie</button></Link>
        </div>

        <div className="horizontal-line"></div>

      <div className="social-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <CiTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <SlSocialFacebook />
          
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram/>
          
        </a>
        

      </div>
    </div>
        </div>
    );
  }
  
  

    

export default Blog
