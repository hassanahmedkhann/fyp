import { Avatar, Button } from "@mui/material";
import React , { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getRequest } from "../../Api-Interaction/api-Interaction";
import { ButtonSX } from "../../Util";
import Loader from "../../Utils/Loader";
import Notification from "../../Utils/Notification";
import "./Campaign.css"

const ClusterCard = ({clusterData,...props}) => {

  const navigate = useNavigate()

  const [alert, setAlert] = useState({ flag: false, status: 1, message: "" });
  const [open, setOpen] = useState(false);

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

  const handleDetails = () => {
    navigate('/cluster-page', {state: { clusterID: clusterData?._id }})
  }

  const handleRetrieve = async () => {

    console.log(clusterData)

    try {

      const essentials = {
        endPoint: `/clusters/retrieve/${clusterData._id}`,
      }

      setOpen(true)
      let resultHandle = await getRequest(essentials);
      if (resultHandle?.success === true) {
        setAlert({ flag: true, 'status': 1, message: resultHandle?.message?.Success });
        setOpen(false);
        props.reloadFunction()
      }
      else {
        setAlert({ flag: true, 'status': 2, message: resultHandle?.data.Error });
        setOpen(false)
      }

    }
    catch (err) {
      setOpen(false)
      console.log("Error! ", err)
    }
  }
  
  return <div className="cluster-card p-4 m-2 fadeUp">
    <Notification alert={alert} setAlert={setAlert}/>
    <Loader open={open}/>
  <div className="cluster-text">
    <h4>Cluster No. {clusterData?.clusterNumber}</h4>
    <h5>Total members: {clusterData?.totalCustomers}</h5>
    {props.deleted && <Button onClick={handleRetrieve} className="cluster-link" sx={linkStyle} to="/cluster-page">Retrieve Cluster</Button>}
    {!props.deleted && <Button onClick={handleDetails} className="cluster-link" sx={linkStyle} to="/cluster-page">Cluster Details</Button>}


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
