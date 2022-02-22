import React from "react";
import "./SplashScreen.css";
import image from "../../Images/splashIcon.jpg";
const SplashScreen = (props) => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="animateLeft text-bold">Welcome to Originate!</h1>
      <img className="animateRight" alt="splashImage" src={image} />
    </div>
  );
};

export default SplashScreen;
