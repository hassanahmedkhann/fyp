import { Avatar, Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonSX } from "../../Util";
import "./Campaign.css"

const ClusterCard = ({clusterData,...props}) => {

  const navigate = useNavigate()

  const avatarStyle = {
    height: '80px',
    width: '80px',
    position:"absolute"
  }

  const linkStyle = {
    fontSize: "18px",
    textDecoration: "none",
    padding: "3px 10px",
    borderRadius: "10px",
    backgroundColor: "#F25839",
    color: "white",
    transition: "all 0.3s"
  }

  const handleClick = () => {
    navigate("/cluster-page", { state: { clusterID: clusterData?._id } })
  }
  
  return <div className="cluster-card p-4 m-2 fadeUp">
  <div className="cluster-text">
    <h4>Cluster No. {clusterData?.clusterNumber}</h4>
    <h5>Total members: {clusterData?.totalCustomers}</h5>
    <Button onClick={handleClick} className="cluster-link" sx={linkStyle} to="/cluster-page">Cluster Details</Button>
  </div>
  <div className="cluster-images">
    <Avatar sx={avatarStyle} src={clusterData.customer1}/>
    <Avatar className="avatar-2" sx={avatarStyle} src={clusterData.customer2}/>
    <Avatar className="avatar-3" sx={avatarStyle} src={clusterData.customer3}/>
    <Avatar className="avatar-4" sx={avatarStyle} src={clusterData.customer4}/>
  </div>
  </div>;
};

export default ClusterCard;
