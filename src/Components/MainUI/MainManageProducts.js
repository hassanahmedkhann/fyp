import Feedback from "@mui/icons-material/Feedback";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Account from "../../Pages/Account/Account";
import Analytics from "../../Pages/Analytics/Analytics";
import Campaigns from "../../Pages/Campaigns/Campaigns";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ManageProducts from "../../Pages/Manage/ManageProducts";
import UpdateProduct from "../../Pages/Manage/UpdateProduct";
import Pipeline from "../../Pages/Pipeline/Pipeline";
import Products from "../../Pages/Products/Products";
import { ButtonSX, buttonSX } from "../../Util";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SplashScreen from "../SplashScreen/SplashScreen";
import "./MainUI.css";
const MainManageProducts = () => {
  const [flag, setFlag] = useState(false);
  const [option, setOption] = useState(6);
  const [choice, setChoice] = useState(0);


  const ButtonStyles = {
    marginTop: "100px",
    display: "flex",
    justifyContent: "space-around"
  }

  const ButtonStyles2 = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around"
  }



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
          <div style={{height: "100vh"}} className={`main-page ${flag && "blur"}`}>
            {choice === 0 && <h1 style={ButtonStyles}>Product Management</h1>}
            { choice === 0 && <h3 className="w-100 text-center mt-4">What do you want to do ?</h3>}
            <div className="w-100" style={ButtonStyles2}>
              { choice === 1 || choice === 0 && <Button onClick={() => setChoice(1)} className={`account-button`} sx={ButtonSX}>Update/Edit product</Button>}
              { choice === 2 || choice === 0 && <Button onClick={() => setChoice(2)} className={`account-button`} sx={ButtonSX}>Add new product</Button>}
              { choice === 3 || choice === 0 && <Button onClick={() => setChoice(3)} className={`account-button`} sx={ButtonSX}>Delete Product</Button>}

            </div>

            {choice === 2 ?
              <ManageProducts />
              : choice === 1 || choice === 3 ?
              <UpdateProduct choice={choice} /> : null
            }


          </div>
        </div>
      </div>

    </>
  );
};

export default MainManageProducts;
