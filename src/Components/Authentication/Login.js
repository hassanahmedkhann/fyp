import React from "react";
import "./authstyles.css";
import back from "../../Images/extras3.png"
import logo from "../../Images/sampleIcon8.PNG";
const Login = () => {
  return (
    <div className="login">
        <div className="background">
        <h1>Lets sign in and make it work!</h1>
        <p><strong>Origin8 AI</strong> is a state of the art AI powred CRM.</p>
        <p>Need Analytics about your business to help grow ? We've got you covered.</p>
        <p>Take your marketing to a whole new level with us.</p>

        <img src={back} alt="Background"/>
      </div>
      <div className="login-box">
        <img alt="logo" src={logo} />
        <input placeholder="Email" type="text" />

        <input placeholder="Password" type="password" />

        <a className="login-link">Signin</a>
        <h5 style={{ color: "#352922" }}>Not Registered ?</h5>
        <a className="login-link">SignUp</a>
      </div>
    </div>
  );
};

export default Login;
