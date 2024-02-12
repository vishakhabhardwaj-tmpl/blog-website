import React, { useState } from "react";
import "./SectionWithForm.css";

const SectionWithForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
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
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
    // if (!email.includes(".")) {
    //   setEmailError(
    //     "Please enter a valid email address with a dot (.) before 'com'"
    //   );
    //   return;
    // }

    const postform = {
      firstName: firstname,
      lastName: lastname,
      email: email,
    };

    const url = "https://onmyscreen-backend.onrender.com/subscriber/";
    const savedata = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postform),
    });

    if (savedata.status === 200) {
      setFirstname("");
      setLastname("");
      setEmail("");
    }

    setFirstnameError("");
    setLastnameError("");
    setEmailError("");
  };

  return (
    <div className="section-with-form">
      <div className="box">
        <h2 className="supporting-text">
          NEVER MISS <br></br>A NEW POST
        </h2>
      </div>
      <form className="form" onSubmit={handlesubmit}>
        <div className="form-group1">
          <div className="firstname">
            <label htmlFor="firstName">
              First Name<span className="required">*</span>:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
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

          <div className="lastname">
            <label htmlFor="lastName">
              Last Name<span className="required">*</span>:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
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

        <div className="form-group">
          <label htmlFor="email">
            Email<span className="required">*</span>:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        <div className="form-bottom">
          <button type="submit" className="subscribe">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SectionWithForm;
