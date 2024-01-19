import React from 'react';
import './AboutMeSection.css'; 

const AboutMeSection = () => {
  const authorImageUrl = 'https://static.wixstatic.com/media/e1bade_c9f7464c4b3f47328e7c4f26dbe60e77~mv2.jpg/v1/crop/x_496,y_1696,w_2550,h_3254/fill/w_356,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/About.jpg'; // Replace with the actual image URL
  const authorName = 'Hi! I am Jane'; 
  
  const redirectToHomepage = () => {
    
    window.location.href = '/';
  };

  return (
    <div className="about-me-section">
      <h2>ABOUT ME</h2>
      <hr />
      <div className='mobileview'>
      <div className="author-section">
        <div className="author-image">
          <img src={authorImageUrl} alt="Author" />
        </div>
        <div className="author-description">
          <h3>{authorName}</h3>
          <p className='aboutdescription'>
            <h2>am a movie blogger</h2><br></br> I am a paragraph. 
            Click here to add your own text and edit me. It is easy. 
            Just click “Edit Text” or double click me to add your own
             content and make changes to the font. Feel free to drag and 
             drop me anywhere you like on your page. I am a great place for 
             you to tell a story and let your users know a little more about you.<br></br>
This is a great space to write long text about your company and your services. 
You can use this space to go into a little more detail about your company. 
Talk about your team and what services you provide. Tell your visitors the
 story of how you came up with the idea for your business and what makes you 
 different from your competitors. Make your company stand out and show your
  visitors who you are.</p>
          <button onClick={redirectToHomepage} className="blog-button">
            MY BLOG
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;

