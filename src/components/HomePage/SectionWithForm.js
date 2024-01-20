// SectionWithForm.js
import React, {useState}from 'react';
import './SectionWithForm.css'; // Import your CSS file with the styles

const SectionWithForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
 

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email);

    const postform = {
      firstName: firstname,
      lastName: lastname,
      email: email,
    };
    const url = "https://onmyscreen-backend.onrender.com/blogs/subscriber/";
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
    }
  };
  return (
    <div className="section-with-form">
      <div className="box">
        <h2 className="supporting-text">NEVER MISS <br></br>A NEW POST</h2>
       
      </div>
      <form className="form"onSubmit={handlesubmit} >

        < div className="form-group1">
            < div className='firstname'>
          <label htmlFor="firstName">First Name<span className="required">*</span>:</label>
          <input type="text" id="firstName" name="firstName" required value={firstname}
                  onChange={(e) => setFirstname(e.target.value)} />
          </div>

          <div className='lastname'>
          <label htmlFor="lastName">Last Name<span className="required">*</span>:</label>
          <input type="text" id="lastName" name="lastName" required value={lastname}
                  onChange={(e) => setLastname(e.target.value)} />
          </div> 
        
          </div>

        <div className="form-group">
          <label htmlFor="email">Email<span className="required">*</span>
          :</label>
          <input type="email" id="email" name="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-bottom">
          <button type="submit" className="subscribe">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default SectionWithForm;
