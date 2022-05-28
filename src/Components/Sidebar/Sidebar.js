import React from "react";
import "../../Utils.css";
import sampleicon from "../../Images/sampleIcon.png";
import bg from "../../Images/sampleIcon8.PNG";
import CancelIcon from "@mui/icons-material/Cancel";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import FaceIcon from "@mui/icons-material/Face";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CategoryIcon from "@mui/icons-material/Category";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { ClickAwayListener } from '@mui/base';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';


const Sidebar = (props) => {
  const sidebarData = [
    { name: "Account", icon: ManageAccountsIcon, link: 'account' },
    { name: "Dashboard", icon: DashboardIcon, link: 'dashboard' },
    { name: "Overall Analytics", icon: InsertChartIcon, link: 'analytics' },
    { name: "Pipeline", icon: EditRoadIcon, link: 'pipeline' },
    { name: "Products", icon: CategoryIcon, link: 'products' },
    { name: "Campaigns", icon: StackedLineChartIcon, link: 'campaign' },
    { name: "Manage Products", icon: PrecisionManufacturingIcon, link: 'manage-products' },
    { name: "Contact Team", icon: PrivacyTipIcon, link: 'contact-team' },
  ];



  const handleClick = (index) => {
    props.setOption(index);
    props.setFlag(!props.flag);
  };

  const handleClickAway = () => {
    if ( props.flag ){
      props.setOption(props.option)
      props.setFlag(!props.flag);
    }
  }



  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      // touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >

      <div className="sidebar">
        <div className="sidebar-icon my-3">
          <img alt="icon" src={bg} />
        </div>

        <div className="sidebar-list">
        
          {sidebarData.map((item, index) => (
            <li
              className={`${props.option === index && "background-sidebar "
                } animate-btn btn-animated-pop`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <Link className="sidebar-link w-100" to={`/${item.link}`}>
                <item.icon fontSize="large" />
                &#160;&#160;{item.name}
              </Link>
            </li>
          ))}

        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Sidebar;
