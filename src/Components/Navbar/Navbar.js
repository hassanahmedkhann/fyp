import React from "react";
import "./Navbar.css";
import smallIcon from "../../Images/smallIcon.PNG";
import sample from "../../Images/sample.jpg";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = (props) => {
  return (
    <div className={`navbar fadeIn ${props.flag && "d-none"}`}>
      <div
        className="navmenu-btn mb-1"
        onClick={() => {
          props.setFlag(!props.flag);
        }}
      >
        <MenuOpenIcon fontSize="large" className="nav-menubtn" />
      </div>
      <img
        className="smallIcon mb-1"
        style={{ width: "35px" }}
        alt="Icon"
        src={smallIcon}
      />
      <div className="navbar-search d-none d-md-flex mb-1">
        <SearchIcon style={{ color: "gray" }} fontSize="large" />
        <input type="text" className="navbar-searchbox" />
      </div>
      <h5 className="d-none d-lg-block">
        Hey, Welcome!<strong>&#160;Hassan Ahmed Khan</strong>
      </h5>
      <Avatar
        sx={{ width: 45, height: 47, cursor: "pointer", marginTop: "-5px" }}
        src={sample}
      />
    </div>
  );
};

export default Navbar;
