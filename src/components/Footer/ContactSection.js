import React from 'react';
import './ContactSection.css'; // Import the CSS file for styling

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="left-box">
        <p className="box-text">
HAVE I MISSED<br/> ANYTHING GOOD <br/> LATELY?

         <br/>LET ME KNOW</p>
      </div>
      <div className="right-form">
        <form>
          <div className="form-line">
            <div className='name'>
          <label htmlFor="firstName">First Name:</label>
            <input type="text" />
            <label htmlFor="lastName">Last Name:</label> 
            <input type="text" />
            </div>
          </div>
          <div className="form-line">
          <label htmlFor="email">Email<span className="required">*</span>:</label>
            <input type="email" required />
          </div>
          <div className="form-line">
          <label htmlFor="Message">Leave us a message:</label>
            <input type="text"/>
          </div>
          <div className="form-line submit-line">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
