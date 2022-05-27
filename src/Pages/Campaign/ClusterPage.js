import React, { useEffect, useState } from "react";
import "./Campaign.css"
import { useLocation, useNavigate } from "react-router-dom"
import Notification from "../../Utils/Notification";
import Loader from "../../Utils/Loader";
import { deleteRequest, getRequest, postRequest } from "../../Api-Interaction/api-Interaction";
import { Box, Button, Modal } from "@mui/material";
import { BackButton, ButtonSX } from "../../Util";
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';

const ClusterPage = () => {

    const navigate = useNavigate()

    const { state } = useLocation()

    const [openModal, setOpenModal] = useState(false)

    const [openEmailModal, setOpenEmailModal] = useState(false)

    const [emailDraft, setEmailDraft] = useState({
        subject: "Thanks for stopping by at our store!",
        body: "As a reward we've decided to make you a member of our growth panel."
    })

    const [draftChange, setDraftChange] = useState({
        subject: "",
        body: ""
    })

    const [clusterData, setClusterData] = useState({
        customerNames: [],
        totalCustomers: 0,
        clusterNumber: 0
    })

    const [open, setOpen] = useState(false)

    const [alert, setAlert] = useState({
        flag: false,
        status: 1,
        message: ""
    });

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

    useEffect(async () => {

        try {

            const essentials = {
                endPoint: `/clusters/get/${state.clusterID}`,
            }

            setOpen(true)
            let resultHandle = await getRequest(essentials);
            if (resultHandle?.success === true) {
                console.log(resultHandle?.message)
                setClusterData({
                    clusterNumber: resultHandle?.message?.clusterNumber,
                    totalCustomers: resultHandle?.message?.totalCustomers,
                    customerNames: [...resultHandle?.message?.clusterData]
                })
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

    }, [])

    const handleDelete = async () => {
        try {

            const essentials = {
                endPoint: `/clusters/delete/${state.clusterID}`,
            }

            setOpen(true)
            setOpenModal(false)
            let resultHandle = await deleteRequest(essentials);
            if (resultHandle?.success === true) {
                setOpen(false);
                setAlert({ flag: true, 'status': 1, message: "Cluster Deleted successfully!" });
                setTimeout(() => {
                    navigate('/campaign')
                }, 1000);
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

    const handleDraftChange = () => {
        setEmailDraft({ subject: draftChange.subject || emailDraft.subject, body: draftChange.body || emailDraft.body })
        setOpenEmailModal(false)
    }

    const handleEmailAPI = async () => {
        try {


            const essentials = {
                endPoint: `/email/${state?.clusterID}`,
                body: emailDraft
            }

            setOpen(true)
            let resultHandle = await postRequest(essentials);
            if (resultHandle?.success === true) {
                setOpen(false);
                setAlert({ flag: true, 'status': 1, message: "Emails sent to all customers!" });
                setTimeout(() => {
                    navigate('/campaign')
                }, 1000);
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

    return <div className="cluster-page">
        <Loader open={open} />
        <Notification alert={alert} setAlert={setAlert} />
        <div className="m-4 cluster-page-card">
            <div className="clusterPageCard">
                <div className="cluster-page-header my-3">
                    <Button onClick={() => navigate('/campaign')} className="account-button mb-3" sx={BackButton}>Back</Button>
                    <h1>Cluster No. {clusterData?.clusterNumber}</h1>
                    <h3>Total Members: {clusterData?.totalCustomers}</h3>
                    <button className="edit-button" onClick={() => setOpenEmailModal(true)}>Edit Email <EditIcon/></button>
                    <div className="email-container">
                        <div className="subject-container"><label>Subject:</label><p className="ms-3">{emailDraft.subject}</p></div>
                        <div className="body-container">
                            <p>Howdy "Customer Name",</p>
                            {emailDraft.body}
                            <p className="mt-3">Hope you'd want to shop again and redeem you package!<br/>Cheers!</p>
                        </div>
                    </div>
                </div>
                <div className="cluster-customer-list">
                    <h3>Customers</h3>
                    <div className="customer-list">
                        {clusterData?.customerNames.map((customer, index) => (
                            <h5 key={index} className="my-3 mx-1 p-3 customer-name">{customer?.fullName}</h5>
                        ))}
                    </div>
                </div>
            </div>
            <div className="cluster-page-buttons">
                <button onClick={() => setOpenModal(true)} className="btn-1 my-3 mx-2">Eliminate Cluster</button>
                <button onClick={handleEmailAPI} className="btn-2 my-3 mx-2">Start Email Campaign</button>
            </div>
            <Modal
                open={openModal}
                // onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="d-flex flex-column align-items-center" sx={style}>
                    <h4 className="mb-2"><strong>Are you sure ?</strong></h4>
                    <p style={{ fontSize: "12px", color: "#1976D2", border: "1px solid #1976D2", width: "fit-content" }} className="mt-1 pe-2"><InfoIcon sx={{ color: "#1976D2", margin: "10px 2px", fontSize: "28px" }} />You can still retrieve the cluster from the deleted group.</p>
                    <div className="d-flex justify-content-evenly">
                        <button onClick={handleDelete} className="mt-2 btn-1">Yes</button>
                        <button onClick={() => setOpenModal(false)} className="mt-2 ms-2 btn-2">No</button>
                    </div>
                </Box>
            </Modal>
            <Modal
                open={openEmailModal}
                // onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="d-flex flex-column align-items-center" sx={style}>
                    <h4 className="mb-2"><strong>Edit email</strong></h4>
                    <div className="email-draft">
                        <label>Subject</label>
                        <input defaultValue={emailDraft.subject} onChange={(event) => setDraftChange({ ...draftChange, subject: event.target.value })} type="text" />
                        <label>Body</label>
                        <textarea defaultValue={emailDraft.body} onChange={(event) => setDraftChange({ ...draftChange, body: event.target.value })} id="w3review" name="w3review" rows="4" cols="50" />
                    </div>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <button onClick={handleDraftChange} className="mt-2 btn-2 mx-1">Change</button>
                        <button onClick={()=>setOpenEmailModal(false)} className="edit-button2 mt-2 mx-1" >Keep as is</button>
                    </div>
                </Box>
            </Modal>
        </div>
    </div>
};

export default ClusterPage;


