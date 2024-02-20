import React, { useState } from "react";
import "./ContactSection.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = { firstname, lastname, email, reviews: message };

    const validateAndSetError = (field, validator, setError) => {
      if (!validator(formData[field])) {
        setError(`Please enter a valid ${field}`);
        return false;
      }
      return true;
    };

    const isValidFirstName = validateAndSetError(
      "firstName",
      validateFirstName,
      setFirstnameError
    );
    const isValidLastName = validateAndSetError(
      "lastName",
      validateLastName,
      setLastnameError
    );
    const isValidEmail = validateAndSetError(
      "email",
      validateEmail,
      setEmailError
    );

    if (isValidFirstName && isValidLastName && isValidEmail) {
      try {
        const url = "https://onmyscreen-backend.onrender.com/blogs/feedback/";
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.status === 200) {
          setFirstname("");
          setLastname("");
          setEmail("");
          setMessage("");
          toast.success("Thanks for feedback!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          // Handle server error
          toast.error("Failed to submit feedback. Please try again later.");
        }
      } catch (error) {
        // Handle network error
        toast.error(
          "Failed to submit feedback. Please check your internet connection."
        );
      }
    }
  };

  return (
    <div className="contact-section" id="contact-us">
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
                <label htmlFor="firstName">
                  First Name<span className="required">*</span>:
                </label>
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
                <label htmlFor="lastName">
                  Last Name<span className="required">*</span>:
                </label>
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
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
