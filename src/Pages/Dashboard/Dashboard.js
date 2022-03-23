import React, { useEffect, useState } from "react";
import Infobox from "../../Components/InfoBoxes/Infobox";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./Dashboard.css";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import Graph from "../../Components/Graphs/Graph";
import dash1 from "../../Images/dash1.PNG";
import dash2 from "../../Images/dash2.PNG";
import dash3 from "../../Images/dash3.PNG";
import dash4 from "../../Images/dash11.jpg";
import dash5 from "../../Images/dash12.jpg";
import dash6 from "../../Images/dash13.jpg";

import Productlist from "../Products/Productlist";
import { getCustomerData } from "../../Api-Interaction/api-Interaction";

const Dashboard = () => {
  const [flag, setFlag] = useState(false);

  const data = [
    {
      heading: "Profit",
      amount: "123,123",
      icon: AccountBalanceIcon,
      color: "yellowgreen",
      backImg: dash5,
    },
    {
      heading: "Purchases",
      amount: "456,456",
      icon: PlaylistAddCheckCircleIcon,
      color: "#02CCCF",
      backImg: dash4,
    },
    {
      heading: "Total Earnings",
      amount: "789,789",
      icon: PaidIcon,
      color: "#F25339",
      backImg: dash6,
      test: dash4,
    },
  ];

  const [customerData, setCustomerData] = useState([]);



  //Getting Customer Data
  useEffect(() => {
    const getData = async () => {
      const response = await getCustomerData()
      if (response.success === true) {
        setCustomerData([...response.message])
      }
    };
    return getData();
  }, []);




  return (
    <div className="dashboard fadeUp">
      <div className="container-fluid">
        {/* <h3 className="my-3 mt-4 text-start w-100">
          Welcome to the <strong>Dashboard</strong>.
        </h3> */}
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
          <div className="col-12 col-lg-8  mb-4 mb-lg-0">
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

// <div className="dashboard-infobox">
//                 {
//                 data.map((item)=>(
//                     <Infobox width={'300px'} color={item.color} icon={item.icon} heading={item.heading} amount={item.amount}/>
//                 ))
//                 }
//             </div>
//             <div className="dashboard-ui-container">
//                 <div className="dashboard-ui-1 bor">
//                     {/* <img src={sampleGraph}/> */}
//                     {data.slice(0,1).map((item)=> (
//                       <Infobox color={item.color} icon={item.icon} heading={item.heading} amount={item.amount} />
//                     ))}

//                 </div>
//                 <div className="dashboard-ui-2 bor">
//                     {data.slice(0,2).map((item)=> (
//                         <>
//                         <Infobox color={item.color} icon={item.icon} heading={item.heading} amount={item.amount}/>
//                         </>
//                     ))}
//                 </div>
//             </div>

{
  /* <div className={`dashboard-sidebar  ${flag && 'sidebar-show'} ${flag2 && 'sidebar-hide'}`}>
        <Sidebar flag={flag} />
      </div>
      <div className="dashboard-ui">
        <div className="dashboard-navbar">
          <Navbar setFlag2={setFlag2} flag2={flag2} setFlag={setFlag} flag={flag} />
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
            {data.map((item) => (
              <div className="col my-3">
                <Infobox
                  color={item.color}
                  icon={item.icon}
                  heading={item.heading}
                  amount={item.amount}
                />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12 col-lg-8 mb-3"><Graph/></div>
            <div className="col-12 col-lg-4">
            <div className="row row-cols-lg-1 row-cols-md-2 row-cols-1">
                {data.slice(0, 2).map((item) => (
                  <div className="col mb-3">
                    <Infobox
                      color={item.color}
                      icon={item.icon}
                      heading={item.heading}
                      amount={item.amount}
                    />
                  </div>
                ))}
              </div>
            </div>
            </div>
        </div>
      </div> */
}
