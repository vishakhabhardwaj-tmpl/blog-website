// SectionWithForm.js
import React from 'react';
import './SectionWithForm.css'; // Import your CSS file with the styles

const SectionWithForm = () => {
  return (
    <div className="section-with-form">
      <div className="box">
        <h2 className="supporting-text">NEVER MISS <br></br>A NEW POST</h2>
       
      </div>
      <form className="form">

        < div className="form-group1">
            < div className='firstname'>
          <label htmlFor="firstName">First Name<span className="required">*</span>:</label>
          <input type="text" id="firstName" name="firstName" required />
          </div>

          <div className='lastname'>
          <label htmlFor="lastName">Last Name<span className="required">*</span>:</label>
          <input type="text" id="lastName" name="lastName" required />
          </div> 
        
          </div>

        <div className="form-group">
          <label htmlFor="email">Email<span className="required">*</span>
          :</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-bottom">
          <button type="submit" className="subscribe">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default SectionWithForm;
