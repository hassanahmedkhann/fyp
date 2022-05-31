import React, { useState } from "react";
import ContactTeam from "../../Pages/Contact Team/ContactTeam";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./MainUI.css";
import Hassan from "../../Images/hassan.jpg"
import Asmar from "../../Images/asmar.jpg"
import Furqan from "../../Images/furqan.jpg"
import PestControlIcon from '@mui/icons-material/PestControl';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import InfoIcon from '@mui/icons-material/Info';
import ContactTeamCard from "../../Pages/Contact Team/ContactTeamCard";

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
                    <div className={`main-page-contact ${flag && "blur"}`}>
                        <div className="d-flex justify-content-center mb-3" style={{marginTop: "80px"}}>
                            <h2>Contact the Team</h2>
                        </div>
                        <div className="d-flex justify-content-center">
                        <ul className="team-list">
                           <div style={{borderBottom: "1px solid #2DC1BA" , color: "#2DC1BA", backdropFilter: "blur(10px)"}} className="d-flex justify-content-center w-100 mb-2 py-1 align-items-center"><InfoIcon sx={{margin: "0px 5px"}}/> Guidelines</div>
                            <li><PestControlIcon/> Report a bug.</li>
                            <li><SettingsSuggestIcon/> Help with the system.</li>
                            <li><DataThresholdingIcon/> Request data upgrade.</li>
                            <li><ModelTrainingIcon/> Request a new model.</li>
                            
                        </ul>
                        </div>
                        <div  className="container-team d-flex justify-content-evenly align-items-center mb-4">
                            {team.map((member, index) => (
                                // <ContactTeam key={index} memberInfo={member} />
                                <ContactTeamCard key={index} memberInfo={member} />

                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default MainContact;
