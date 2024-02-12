import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateFirstName = (firstName) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(firstName);
  };

  const validateLastName = (lastName) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(lastName);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(?=[^.]+\.[a-z]+$)[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!validateFirstName(firstname)) {
      setFirstnameError("Please enter a valid first name");
      return;
    }

    if (!validateLastName(lastname)) {
      setLastnameError("Please enter a valid last name");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    const postform = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      reviews: message,
    };
    const url = "https://onmyscreen-backend.onrender.com/blogs/feedback/";
    const savedata = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postform),
    });

    if (savedata.status === 200) {
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
    }

    setFirstnameError("");
    setLastnameError("");
    setEmailError("");
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
        <form className="contacts" onSubmit={handlesubmit}>
          <div className="form-line">
            <div className="name">
              <div className="firstnamee">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                    setFirstnameError("");
                  }}
                />
                {firstnameError && (
                  <span className="error-message">{firstnameError}</span>
                )}
              </div>
              <div className="lastnamee">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                    setLastnameError("");
                  }}
                />
                {lastnameError && (
                  <span className="error-message">{lastnameError}</span>
                )}
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
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
            {emailError && <span className="error-message">{emailError}</span>}
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
