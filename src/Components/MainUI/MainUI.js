import Feedback from "@mui/icons-material/Feedback";
import React, { useEffect, useState } from "react";
import Account from "../../Pages/Account/Account";
import Analytics from "../../Pages/Analytics/Analytics";
import Campaigns from "../../Pages/Campaigns/Campaigns";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Pipeline from "../../Pages/Pipeline/Pipeline";
import Products from "../../Pages/Products/Products";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SplashScreen from "../SplashScreen/SplashScreen";
import "./MainUI.css";
const MainUI = () => {
  const [flag, setFlag] = useState(false);
  const [option, setOption] = useState(1);
  const [splashFlag, setSplashFlag] = useState(true);

  setTimeout(() => {
    setSplashFlag(false);
  }, 500);

  console.log(splashFlag);
  useEffect(() => {
    // setMainUi(document.querySelector(".main-page"));
    const mainDiv = document.querySelector(".mainUI");
    const mainDiv2 = document.querySelector(".main-sidebar");

    // mainDiv.addEventListener("click", () => {
    //   console.log("Clicked", flag);
    // });
    // mainUI.addEventListener("click", () => {
    //   console.log("Clicked", flag);
    // if (flag === true) {
    //   setFlag((flag) => !flag);
    // }
  }, []);

  return (
    <>
      {splashFlag === true && <SplashScreen />}
      {splashFlag === false && (
        <div className="mainUI">
          <Navbar flag={flag} setFlag={setFlag} />
          {/* <div className="container-fluid mt-3">
        <div className="row">
          <div className={`col-3 ${!flag && "sidebar-show"} sidebar-hidden`}>
            <Sidebar />
          </div>
          <div className={`col-9 p-0`}>
            <Dashboard />
          </div>
        </div>
      </div> */}
          <div className="main-container">
            <div
              className={`main-sidebar sidebar-hidden ${
                flag && "sidebar-show"
              }`}
            >
              <Sidebar
                option={option}
                setOption={setOption}
                flag={flag}
                setFlag={setFlag}
              />
            </div>
            <div className={`main-page ${flag && "blur"}`}>
              {option === 0 && <Account />}
              {option === 1 && <Dashboard />}
              {option === 2 && <Analytics />}
              {option === 3 && <Pipeline />}
              {option === 4 && <Feedback />}
              {option === 5 && <Products />}
              {option === 6 && <Campaigns />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainUI;
