import React, { useState } from "react";
import "./ContactSection.css"; // Import the CSS file for styling

const ContactSection = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, message);

    const postform = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      reviews: message,
    };
    const url = "https://onmyscreen-backend.onrender.com/blogs/feedback/";
    const savedata = await fetch(url, {
      method: "POST",
      headers: {           'Content-Type': 'application/json',    },
      body: JSON.stringify(postform),
    });
    console.log(savedata);
    if(savedata.status === 200){
      setFirstname('')
      setLastname('')
      setEmail('')
      setMessage('')
    }
  };

  return (
    <div className="contact-section">
      <div className="left-box">
        <p className="box-text">
          HAVE I MISSED
          <br /> ANYTHING GOOD <br /> LATELY?
          <br />
          LET ME KNOW
        </p>
      </div>
      <div className="right-form">
        <form onSubmit={handlesubmit}>
          <div className="form-line">
            <div className="name">
              <div className="firstnamee">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="lastnamee">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-line">
            <label htmlFor="email">
              Email<span className="required">*</span>:
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-line">
            <label className="label-form-line" htmlFor="Message">
              Leave us a message:
            </label>
            <input
              type="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
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
