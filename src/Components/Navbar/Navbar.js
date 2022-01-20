import React from "react";
import "./Navbar.css";
import smallIcon from "../../Images/smallIcon.PNG";
import sample from "../../Images/sample.jpg";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = (props) => {
  return (
    <div className={`navbar ${props.flag && "d-none"}`}>
      <div
        onClick={() => {
          props.setFlag(!props.flag);
        }}
      >
        <MenuOpenIcon fontSize="large" className="nav-menubtn" />
        <img
          className="smallIcon"
          style={{ width: "40px", marginLeft: "10px" }}
          alt="Icon"
          src={smallIcon}
        />
      </div>
      <div className="navbar-search d-none d-md-flex">
        <SearchIcon style={{ color: "gray" }} fontSize="large" />
        <input type="text" className="navbar-searchbox" />
      </div>
      <h3 className="d-none d-lg-block">
        Hey, Welcome!<strong>&#160;Hassan Ahmed Khan</strong>
      </h3>
      <Avatar sx={{ width: 50, height: 50, cursor: "pointer" }} src={sample} />
    </div>
  );
};

export default Navbar;
