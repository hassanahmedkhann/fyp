import React, { useState } from "react";
import "./authstyles.css";
import back from "../../Images/extras3.png"
import logo from "../../Images/sampleIcon8.PNG";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoginApi } from "../../Api-Interaction/api-Interaction";
import Notification from "../../Utils/Notification";
import Loader from "../../Utils/Loader";
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {


  const [showPass, setShowPass] = useState(false);

  const [open, setOpen] = useState(false);

  const [alert, setAlert] = useState({
    flag: false,
    status: 1,
    message: ""
  });

  const navigate = useNavigate();

  const [values, setValues] = useState({
    'email': "",
    'password': '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setOpen(true)
      let resultHandle = await LoginApi(values);

      if (resultHandle?.success === true) {
        localStorage.setItem('token', JSON.stringify(resultHandle?.message.Access_Token))
        localStorage.setItem('user', JSON.stringify(resultHandle?.message.User_Data))
        setOpen(false);
        navigate('/dashboard')
      }
      else {
        setAlert({ flag: true, 'status': 2, message: resultHandle?.data.Error });
        setOpen(false)
      }

    }
    catch (err) {
      setOpen(false)
      console.log("Error! ", err)
    }
  }

  return (
    <div className="login fadeIn">
      <div className="background">
        <h1 className="mt-4 text-white">Lets sign in and make it work!</h1>
        <p><strong>Origin 8 AI</strong> is a state of the art AI powred CRM.</p>
        <p>Need Analytics about your business to help grow ? We've got you covered.</p>
        <p>Take your marketing to a whole new level with us.</p>

        <img src={back} alt="Background" />
      </div>


      <div className="login-box p-4">
        <img alt="logo" src={logo} />
        {/* <p className="w-100 login-label mt-4">Email:</p> */}
        <form onSubmit={handleLogin}>
          <div className="login-input"><PersonIcon /><input required onChange={handleChange('email')} placeholder="Email" type="text" /></div>
          <div className="login-input"><LockIcon /><input required onChange={handleChange('password')} placeholder="Password" type={`${showPass ? 'text' : 'password'}`} />{showPass ? <Visibility onClick={() => setShowPass(!showPass)} /> : <VisibilityOff onClick={() => setShowPass(!showPass)} />}</div>
          <button type="submit" className="login-link"><p>Sign In </p><span><LoginIcon /></span></button>
        </form>
        {/* <p className="w-100 login-label mt-4">Password:</p> */}
        <Notification open={open} alert={alert} setAlert={setAlert} />
        <Loader open={open} />

      </div>

    </div>
  );
};

export default Login;
