import React from "react";
import "./authstyles.css";
import logo from "../../Images/sampleIcon8.PNG";
import back from "../../Images/background.jpg"
const Signup = () => {
  return (
    <div id="signup" className="login">
      <div className="background">
        <h1>Welcome to the Registration Portal</h1>
        <p><strong>Origin8 AI</strong> is a state of the art AI powred CRM.</p>
        <p>Need Analytics about your business to help grow ? We've got you covered.</p>
        <p>Take your marketing to a whole new level with us.</p>
        <img src={back} alt="Background"/>
      </div>
      <div className="login-box">
        <img alt="logo" src={logo} />
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
        <input placeholder="Confirm Password" type="password" />

        <a className="login-link">Register</a>
        <h5 style={{ color: "#352922" }}>Already Registered ?</h5>
        <a className="login-link">Sign In</a>
      </div>
    </div>
  );
};

export default Signup;
