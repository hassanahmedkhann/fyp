import React, { useEffect, useState } from "react";
import "./Campaign.css"
import Grid from '@mui/material/Grid';
import ClusterCard from "./ClusterCard";
import customer1 from "../../Images/customer1.jpg"
import customer2 from "../../Images/customer2.jpg"
import customer3 from "../../Images/customer3.jpg"
import customer4 from "../../Images/customer4.jpg"
import { getRequest } from "../../Api-Interaction/api-Interaction";
import Notification from "../../Utils/Notification";
import Loader from "../../Utils/Loader";
import { Avatar, Button, Modal } from "@mui/material";
import { buttonSX, ButtonSX } from "../../Util";
import { Box } from "@mui/system";
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import noData from "../../Images/empty.jpg"
const Campaign = () => {

  const [clusterData, setClusterData] = useState()
  const [deletedFlag, setDeletedFlag] = useState(false)
  const [deletedClusters, setDeletedClusters] = useState()
  const [reloadPredictions, setReloadPredictions] = useState(false)
  const [alert, setAlert] = useState({
    flag: false,
    status: 1,
    message: ""
  });
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  //Modal Styles
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    maxWidth: 500,
    bgcolor: 'white',
    border: 'none',
    boxShadow: 24,
    borderRadius: '25px',
    p: 3,
  };


  const getClusters = async () => {
    try {

      const essentials = {
        endPoint: '/clusters/list',
      }
      setOpen(true)
      let resultHandle = await getRequest(essentials);
      if (resultHandle?.success === true) {
        // console.log(resultHandle?.message)
        setClusterData(resultHandle?.message)
        setOpen(false);
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

  const getDeletedClusters = async () => {
    try {

      const essentials = {
        endPoint: '/clusters/list/deleted',
      }
      setOpen(true)
      let resultHandle = await getRequest(essentials);
      if (resultHandle?.success === true) {
        // console.log(resultHandle?.message)
        setDeletedClusters(resultHandle?.message)
        setOpen(false);
      }
      else {
        setAlert({ flag: true, 'status': 2, message: "No deleted clusters found!"});

        setOpen(false)

      }

    }
    catch (err) {
      setOpen(false)
      console.log("Error! ", err)
    }
  }

  useEffect(() => {

    getClusters()

  }, [reloadPredictions])



  const getNewPredictions = async () => {

    try {

      const essentials = {
        endPoint: '/predictions',
      }
      setDeletedFlag(false)
      setOpen(true)
      setOpenModal(false)
      let resultHandle = await getRequest(essentials);
      if (resultHandle?.success === true) {
        // console.log(resultHandle?.message)
        setAlert({ flag: true, 'status': 1, message: resultHandle?.message?.Success });
        setOpen(false);
        setReloadPredictions(!reloadPredictions)
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


  const handleDeleted = () => {
    setDeletedFlag(true)
    getDeletedClusters()
  }


  return (
    <div style={{ minHeight: "100vh" }}>
      <Loader open={open} />
      <Notification setAlert={setAlert} alert={alert} />
      <div className="campaign container-fluid">
        <h3 className="text-center my-4 ">CLUSTER ANALYSIS</h3>
        <Grid rowGap={1} container className="mb-4">
          <Grid item xs={12} sm={6} md={4} className="d-flex justify-content-center"><Button onClick={() => setOpenModal(true)} className="account-button" style={ButtonSX}>Get New Predictions</Button></Grid>
          <Grid item xs={12} sm={6} md={4} className="d-flex justify-content-center"><Button onClick={() => setDeletedFlag(false)} className={`account-button ${!deletedFlag && 'hold'}`} style={ButtonSX}>Existing Clusters</Button></Grid>
          <Grid item xs={12} sm={6} md={4} className="d-flex justify-content-center"><Button onClick={handleDeleted} className={`account-button ${deletedFlag && 'hold'}`} style={ButtonSX}>Deleted Clusters</Button></Grid>
        </Grid>
        {!deletedFlag ?
          <div className="row row-cols-lg-3 row-cols-xl-4 row-cols-md-2 ">
            {clusterData?.map((clusterData, index) => (
              <div key={index} className="col p-0 d-flex justify-content-center">
                <ClusterCard clusterData={clusterData} index={index + 1} />
              </div>
            ))
            }
          </div> :
          <div className="row row-cols-lg-3 row-cols-xl-4 row-cols-md-2 ">
            {deletedClusters?.length > 0 ? <>{deletedClusters?.map((clusterData, index) => (
              <div key={index} className="col p-0 d-flex justify-content-center">
                <ClusterCard reloadFunction={getDeletedClusters} deleted clusterData={clusterData} index={index + 1} />
              </div>
            ))
            }</> :
              // <h4 style={{marginTop: "150px" , color: "red"}} className="w-100 text-center d-flex align-items-center justify-content-center"><ErrorIcon sx={{fontSize: "35px"}} />   No data exists!</h4>
                <div className="d-flex justify-content-center w-100 mt-4 searchProduct"><img style={{ width: "50%" , borderRadius: "30px" , boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', borderRadius: "30% 70% 70% 30% / 30% 34% 66% 70% "}} src={noData} /></div>
            }
          </div>
        }
      </div>
      <Modal
        open={openModal}
        // onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="d-flex flex-column align-items-center" sx={style}>
          <h4 className="mb-2"><strong>Are you sure ?</strong></h4>
          <div style={{ border: "1px solid gray", borderStyle: "dashed", borderRadius: "10px" }} className="ps-2 d-flex align-items-center">
            <WarningIcon sx={{ color: "red", fontSize: "50px" }} />
            <p className="mt-3 ms-2" style={{ color: "red" }}><b>Remember!</b> this will erase all existing clusters and populate new ones.</p>
          </div>
          <p style={{ fontSize: "12px", color: "#1976D2", border: "1px solid #1976D2", width: "fit-content" }} className="mt-1 pe-2"><InfoIcon sx={{ color: "#1976D2", margin: "10px 2px", fontSize: "28px" }} />Getting new predictions may take some time.</p>
          <div className="d-flex justify-content-evenly">
            <button onClick={getNewPredictions} className="mt-2 btn-1">Yes</button>
            <button onClick={() => setOpenModal(false)} className="mt-2 ms-2 btn-2">No</button>
          </div>
        </Box>
      </Modal>
    </div>
  )
};

export default Campaign;
