import React from "react";
import "./authstyles.css";
import back from "../../Images/extras3.png"
import logo from "../../Images/sampleIcon8.PNG";
import { Link } from "react-router-dom";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const Login = () => {
  return (
    <div className="login fadeIn">
        <div className="background">
        <h1 className="mt-4 text-white">Lets sign in and make it work!</h1>
        <p><strong>Origin 8 AI</strong> is a state of the art AI powred CRM.</p>
        <p>Need Analytics about your business to help grow ? We've got you covered.</p>
        <p>Take your marketing to a whole new level with us.</p>

        <img src={back} alt="Background"/>
      </div>
      <div className="login-box p-4">
        <img alt="logo" src={logo} />
        <p className="w-100 login-label mt-4">Email:</p>
        <input placeholder="Email" type="text" />
        <p className="w-100 login-label mt-4">Password:</p>
        <input placeholder="Password" type="password" />

        <Link to='/dashboard' className="login-link"><p>Sign In <LockOpenIcon/></p></Link>
      </div>
    </div>
  );
};

export default Login;
