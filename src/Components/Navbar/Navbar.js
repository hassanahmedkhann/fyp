import React from "react";
import "./Navbar.css";
import smallIcon from "../../Images/smallIcon.PNG";
import sample from "../../Images/sample.jpg";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Avatar, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const Navbar = (props) => {

  const user = JSON.parse(localStorage.getItem("user"));

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
      <img
        className="smallIcon ms-4"
        style={{ width: "35px" }}
        alt="Icon"
        src={smallIcon}
      />
      <div className="navbar-search d-none d-md-flex">
        <SearchIcon style={{ color: "gray" }} fontSize="large" />
        <input type="text" className="navbar-searchbox" />
      </div>

      {/* <h5 className="d-none d-lg-block">
        Hey, Welcome!<strong>&#160;Hassan Ahmed Khan</strong>
      </h5> */}
      <Tooltip title="Logout" >
        <Link to='/' onClick={() => localStorage.clear()}>
          <Avatar
            sx={{ width: 45, height: 47, cursor: "pointer", }}
          // src={sampl}
          >{user?.email[0].toUpperCase()}</Avatar>
        </Link>
      </Tooltip>
    </div>
  );
};

export default Navbar;
