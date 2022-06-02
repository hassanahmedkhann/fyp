import React from "react";
import "./Navbar.css";
import smallIcon from "../../Images/smallIcon.PNG";
import sample from "../../Images/sample.jpg";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Autocomplete, Avatar, TextField, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link , useNavigate} from "react-router-dom";
import Loader from "../../Utils/Loader";
const Navbar = (props) => {

  const user = JSON.parse(localStorage.getItem("user"));

  const allComponents = [{ link: "/account", text: 'Account' }, { link: "/campaign", text: 'Campaigns' }, { link: "/campaign", text: 'Clusters' }, { link: "/account", text: 'Profile' }, { link: "/products", text: 'Products' }, { link: "/manage-products", text: 'Edit product' }, { link: "/manage-products", text: 'Management' }, { link: "/pipeline", text: 'Pipeline' }, { link: "/contact-team", text: 'Contact' }, { link: "/contact-team", text: 'Support' },{ link: "/analytics", text: 'Analytics' },{ link: "/analytics", text: 'Graphs' },{ link: "/dashboard", text: 'Growth' }, { link: "/dashboard", text: 'Dashboard' },{ link: "/pipeline", text: 'Origin8' } ]

  const navigate = useNavigate()

  const searchboxStyles = {
    height: "40px !important",
    width: "100%",
    outline: "none",
    border: "none",
    zIndex: "999"
  }

  const textfieldStyles = {
    maxHeight: "40px",
    height: "40px !important",
    marginBottom: "5px !important"
  }

  const handleRoute = (value) => {
   allComponents.forEach((component)=>{
     if (component.text === value) navigate(`${component.link}`)
   })
  }


  return (
    <div className={`navbar mt-2 mx-2 fadeIn ${props.flag && "d-none"}`}>

      <div
        className="navmenu-btn ml-2"
        onClick={() => {
          props.setFlag(!props.flag);
        }}
      >
        <MenuOpenIcon fontSize="large" className="nav-menubtn" />
      </div>

      {/* <img
        className="smallIcon ms-4"
        style={{ width: "35px" }}
        alt="Icon"
        src={smallIcon}
      /> */}

      <div className="navbar-search d-none d-md-flex">
        <SearchIcon style={{ color: "gray" }} fontSize="large" />
        {/* <input placeholder="Search here.." type="text" className="navbar-searchbox" /> */}
        <Autocomplete
          freeSolo
          disablePortal
          id="combo-box-demo"
          options = {allComponents.map((component) => component.text)}
          sx={searchboxStyles}
          onChange={(event)=> handleRoute(event.target.outerText)}
          renderInput={(params) => <TextField placeholder="Search.." sx={textfieldStyles} {...params} />}
        />
      </div>

      {/* <h5 className="d-none d-lg-block">
        Hey, Welcome!<strong>&#160;Hassan Ahmed Khan</strong>
      </h5> */}
      <Tooltip title="Logout" >
        <Link to='/' onClick={() => localStorage.clear()}>
          <Avatar
            sx={{ width: 45, height: 47, cursor: "pointer", }}
            src={user?.profileImage}
          />
        </Link>
      </Tooltip>
    </div>
  );
};

export default Navbar;
