import React, { useEffect, useState } from "react";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SplashScreen from "../SplashScreen/SplashScreen";
import "./MainUI.css";
const MainUI = () => {
  const [flag, setFlag] = useState(false);

  const [option, setOption] = useState(1);

  const user = JSON.parse(localStorage.getItem('user'))

  const [splashFlag, setSplashFlag] = useState(true);


  setTimeout(() => {
    setSplashFlag(false);
  }, 1500);


  // useEffect(() => {
  //   setMainUi(document.querySelector(".main-page"));
  //   const mainDiv = document.querySelector(".mainUI");
  //   const mainDiv2 = document.querySelector(".main-sidebar");

  //   mainDiv.addEventListener("click", () => {
  //     console.log("Clicked", flag);
  //   });
  //   mainUI.addEventListener("click", () => {
  //     console.log("Clicked", flag);
  //   if (flag === true) {
  //     setFlag((flag) => !flag);
  //   }
  // }, []);

  return (
    <>
      {splashFlag && <SplashScreen />}
      {!splashFlag && (
        <div className="mainUI">
          <Navbar flag={flag} setFlag={setFlag} />

          <div className="main-container">
            <div
              className={`main-sidebar sidebar-hidden ${flag && "sidebar-show"
                }`}
            >
              <Sidebar
                option={option}
                setOption={setOption}
                flag={flag}
                setFlag={setFlag}
              />
            </div>
            <div className={`main-page mainPad ${flag && "blur"}`}>
              <Dashboard />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainUI;
