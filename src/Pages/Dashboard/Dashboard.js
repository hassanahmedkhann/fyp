import React, { useEffect, useState } from "react";
import Infobox from "../../Components/InfoBoxes/Infobox";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./Dashboard.css";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import Graph from "../../Components/Graphs/Graph";
import dash4 from "../../Images/dash11.jpg";
import dash5 from "../../Images/dash12.jpg";
import dash6 from "../../Images/dash13.jpg";

import Productlist from "../Products/Productlist";
import Notification from "../../Utils/Notification";
import Loader from "../../Utils/Loader";

const Dashboard = ({profitData}) => {

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({
    flag: false,
    status: 1,
    message: ""
  });




  const data = [
    {
      heading: "Profit",
      amount: profitData?.Analytics?.totalProfit,
      icon: AccountBalanceIcon,
      color: "yellowgreen",
      backImg: dash5,
    },
    {
      heading: "Purchases ( Units )",
      amount: profitData?.Analytics.totalSales,
      icon: PlaylistAddCheckCircleIcon,
      color: "#02CCCF",
      backImg: dash4,
    },
    {
      heading: "Earnings",
      amount: profitData?.Analytics.totalEarning,
      icon: PaidIcon,
      color: "#F25339",
      backImg: dash6,
      test: dash4,
    },
  ];


  return (
    <div className="dashboard fadeUp">
      <Notification alert={alert} setAlert={setAlert} />
      <Loader open={open} />
      <div className="container-fluid">

        <div className="row">
          {data.map((item, index) => (
            <div
              key={index}
              className="mt-4 col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center "
            >
              <Infobox
                graph
                backImg={item.backImg}
                color={item.color}
                color2={'white'}
                icon={item.icon}
                heading={item.heading}
                amount={item.amount}
              />
            </div>
          ))}
        </div>
        <div className="row row-cols-1 row-cols-lg-2 my-3 mt-lg-4">
          <div className="graphDash col-12 col-lg-8  mb-4 mb-lg-0">
            <Graph />
          </div>
          <div className="col-12 col-lg-4 mt-lg-0 mb-3 mt-3 d-flex justify-content-center">
            <Productlist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


