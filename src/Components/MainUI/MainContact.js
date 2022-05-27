import Feedback from "@mui/icons-material/Feedback";
import React, { useEffect, useState } from "react";
import Account from "../../Pages/Account/Account";
import Analytics from "../../Pages/Analytics/Analytics";
import Campaigns from "../../Pages/Campaigns/Campaigns";
import ContactTeam from "../../Pages/Contact Team/ContactTeam";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Pipeline from "../../Pages/Pipeline/Pipeline";
import Products from "../../Pages/Products/Products";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SplashScreen from "../SplashScreen/SplashScreen";
import "./MainUI.css";
import Hassan from "../../Images/hassan.jpg"
import Asmar from "../../Images/asmar.jpg"
import Furqan from "../../Images/furqan.jpg"
const MainContact = () => {
    const [flag, setFlag] = useState(false);
    const [option, setOption] = useState(7);

    const team = [
        {
            name: "Hassan Ahmed Khan",
            designation: "Developer",
            email: "itshakhere@gmail.com",
            picture: Hassan
        },
        {
            name: "Syed Asmar Hassan",
            designation: "Developer",
            email: "asmarhasan14@gmail.com",
            picture: Asmar
        },
        {
            name: "M. Umer Furqan Ali",
            designation: "Developer",
            email: "furqana734@gmail.com",
            picture: Furqan
        }
    ]



    return (
        <>
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
                    <div className={`main-page ${flag && "blur"}`}>
                        <div className="d-flex justify-content-center mb-3" style={{marginTop: "80px"}}>
                            <h2>Contact The Team</h2>
                        </div>
                        <div  className="container-team d-flex justify-content-evenly align-items-center">
                            {team.map((member, index) => (
                                <ContactTeam key={index} memberInfo={member} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default MainContact;
