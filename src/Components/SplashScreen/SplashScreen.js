import React from "react";
import "./SplashScreen.css";
import image from "../../Images/splashIcon.jpg";
const SplashScreen = (props) => {
  return (
    <div className="splash vh-100 d-flex align-items-center justify-content-center flex-column">
      <span className="span1"><h1 className="animateLeft text-bold">Welcome to Origin8!</h1></span>
      <span className="span2"><img className="animateRight" alt="splashImage" src={image} /></span>
    </div>
  );
};

export default SplashScreen;
