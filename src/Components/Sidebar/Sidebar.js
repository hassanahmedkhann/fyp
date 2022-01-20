import React from "react";
import "../../Utils.css";
import sampleicon from "../../Images/sampleIcon.png";
import bg from "../../Images/sampleIcon8.PNG";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import FaceIcon from "@mui/icons-material/Face";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CategoryIcon from "@mui/icons-material/Category";
import "./Sidebar.css";
const Sidebar = (props) => {
  const sidebarData = [
    { name: "Account", icon: FaceIcon },
    { name: "Dashboard", icon: DashboardIcon },
    { name: "Overall Analytics", icon: InsertChartIcon },
    { name: "Pipeline", icon: EditRoadIcon },
    { name: "Feedback", icon: FeedbackIcon },
    { name: "Products", icon: CategoryIcon },
    { name: "Campaigns", icon: StackedLineChartIcon },
  ];

  const handleClick = (index) => {
    props.setOption(index);
    props.setFlag(!props.flag);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-icon my-3">
        <img alt="icon" src={bg} />
      </div>
      <div className="sidebar-list">
        {sidebarData.map((item, index) => (
          <li
            className={`${
              props.option === index && "background-sidebar"
            } animate-btn btn-animated-pop`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <item.icon fontSize="large" />
            &#160;&#160;{item.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
