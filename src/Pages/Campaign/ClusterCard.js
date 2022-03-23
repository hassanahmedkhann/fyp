import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Campaign.css"

const ClusterCard = ({clusterData,...props}) => {

  const avatarStyle = {
    height: '80px',
    width: '80px',
    position:"absolute"
  }

  const linkStyle = {
    fontSize: "20px",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "20px",
    backgroundColor: "#F25839",
    color: "white",
    transition: "all 0.3s"
  }
  return <div className="cluster-card p-4 m-2 fadeUp">
  <div className="cluster-text">
    <h4>Cluster No. {props.index}</h4>
    <h5>Total members: {clusterData.total}</h5>
    <Link className="cluster-link" style={linkStyle} to="/cluster-page">Cluster Details</Link>
  </div>
  <div className="cluster-images mt-2">
    <Avatar sx={avatarStyle} src={clusterData.customer1}/>
    <Avatar className="avatar-2" sx={avatarStyle} src={clusterData.customer2}/>
    <Avatar className="avatar-3" sx={avatarStyle} src={clusterData.customer3}/>
    <Avatar className="avatar-4" sx={avatarStyle} src={clusterData.customer4}/>
  </div>
  </div>;
};

export default ClusterCard;
