import React, { useEffect, useState } from "react";
import { getProfit, getRequest } from "../../Api-Interaction/api-Interaction";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Loader from "../../Utils/Loader";
import Notification from "../../Utils/Notification";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SplashScreen from "../SplashScreen/SplashScreen";
import "./MainUI.css";
const MainUI = () => {
  const [flag, setFlag] = useState(false);

  const [option, setOption] = useState(1);

  const user = JSON.parse(localStorage.getItem('user'))

  const [splashFlag, setSplashFlag] = useState(true);

  const [open, setOpen] = useState(false);

  const [profitData, setProfitData] = useState();

  const [alert, setAlert] = useState({
    flag: false,
    status: 1,
    message: ""
  });




  setTimeout(() => {

    setSplashFlag(false);
  }, 1500);

  useEffect(async () => {

    if (user?.email?.length > 0) setSplashFlag(false)

    try {
      setOpen(true)
      let resultHandle = await getProfit();

      if (resultHandle?.success === true) {
        setProfitData(resultHandle?.message)
        JSON.stringify(localStorage.setItem('totalPurchases', resultHandle?.message?.Analytics?.totalSales))
        setOpen(false);

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

  }, []);




  return (
    <>
      {splashFlag && <SplashScreen />}
      {!splashFlag && (
        <div className="mainUI">
          <Loader open={open} />
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
              <Notification alert setAlert />
              <Dashboard profitData={profitData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainUI;
