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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ClusterPage = () => {

    const navigate = useNavigate()

    const { state } = useLocation()

    const [openModal, setOpenModal] = useState(false)

    const [openEmailModal, setOpenEmailModal] = useState(false)

    const [openPackageModal, setOpenPackageModal] = useState(false)

    const [showPackage, setShowPackage] = useState(false)

    const [emailDraft, setEmailDraft] = useState({
        subject: "Thanks for stopping by at our store!",
        body: "We've observed your choices and have decided to make a discounted package as a reward.",
        pakage: {}
    })

    const [draftChange, setDraftChange] = useState({
        subject: "",
        body: ""
    })

    const [clusterData, setClusterData] = useState({
        customerNames: [],
        totalCustomers: 0,
        clusterNumber: 0,
    })

    const [packageData, setPackageData] = useState()

    const [discount, setDiscount] = useState(10)

    const [originalAmount, setOriginalAmount] = useState()

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
        maxWidth: 700,
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
                setClusterData({
                    clusterNumber: resultHandle?.message?.clusterNumber,
                    totalCustomers: resultHandle?.message?.totalCustomers,
                    customerNames: [...resultHandle?.message?.clusterData],
                    package: resultHandle?.message.package.split(',')
                })
                const packageArray = resultHandle?.message.package.split(',')
                handlePackage(packageArray)
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

    const handlePackage = async (array) => {

        const intArray = []
        array.forEach((item) => {
            intArray.push(parseInt(item))
        })

        try {

            const essentials = {
                endPoint: `/product/list/data`,
                body: { "products": intArray }
            }

            setOpen(true)
            let resultHandle = await postRequest(essentials);
            if (resultHandle?.success === true) {
                setPackageData(resultHandle.message)
                setOriginalAmount(resultHandle.message[resultHandle?.message?.length - 1]?.originalAmount)
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
        let packageInfo = ''
        packageInfo = packageInfo + packageData.slice(0,packageData.length - 1).map((item)=> item.productName)

        let emailBody = {
            subject: emailDraft.subject,
            body: emailDraft.body,
            packageInfo: packageInfo,
            originalPrice: originalAmount,
            discountedPrice: ((originalAmount) - ((originalAmount / 100) * discount)).toFixed(2)
        }



        try {


            const essentials = {
                endPoint: `/email/${state?.clusterID}`,
                body: emailBody
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
    
    const handlePackageClose = () => {
        if (discount.length <= 0) return setAlert({ flag: true, 'status': 2, message: "Discount field can not be left empty!" })
        if (discount < 0) return setAlert({ flag: true, 'status': 2, message: "Discount field can not be negative!" })
        if (discount > 75) return setAlert({ flag: true, 'status': 2, message: "Discount value not allowed!" })
        setOpenPackageModal(false)
    }


    return <div className="cluster-page">
        <Loader open={open} />
        <Notification alert={alert} setAlert={setAlert} />
        <div className="m-4 cluster-page-card">
            <div className="clusterPageCard">
                <div className="cluster-page-header my-3">
                    <Button onClick={() => navigate('/campaign')} className="account-button mb-3" sx={BackButton}><ArrowBackIosIcon /> Back</Button>
                    <h1>Cluster No. {clusterData?.clusterNumber}</h1>
                    <h3>Total Members: {clusterData?.totalCustomers}</h3>
                    <button className="edit-button" onClick={() => setOpenEmailModal(true)}>Edit Email <EditIcon /></button>
                    <button className="edit-button" onClick={() => setOpenPackageModal(true)}>View Package <VisibilityIcon /></button>
                    <div className="email-container mt-3">
                        <div className="subject-container"><label>Subject:</label><p className="ms-3">{emailDraft.subject}</p></div>
                        <div className="body-container">
                            <p>Howdy Customer,</p>
                            {emailDraft.body}
                            <button onClick={()=>setShowPackage(!showPackage)} style={{width: "fit-content" , textDecoration: "underline", background: "transparent", border: "none"}} className="my-2 mx-0">Show/Hide Package</button>
                            {showPackage && <>
                                <p className="mt-2 mb-0">The package includes..</p>
                                <div className="my-2 fadeIn">
                                    {packageData.slice(0, packageData.length - 1).map((item,index) => (
                                        <p key={index} className="m-0">{item.productName}</p>
                                    ))
                                    }
                                    <p className="m-0">Original cost: {originalAmount} $</p>
                                    <p>Discounted cost: <strong>{((originalAmount) - ((originalAmount / 100) * discount)).toFixed(2)}</strong> $</p>
                                </div>
                            </>}
                            <p>We hope you'd want to shop again and redeem you package!<br />Cheers!</p>
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
                <button onClick={handleEmailAPI} className="btn-2 mb-3 mx-2">Start Email Campaign</button>
                <button onClick={() => setOpenModal(true)} className="btn-1 mb-3 mx-2">Eliminate Cluster</button>
            </div>
            <Modal
                open={openModal}
                // onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="d-flex flex-column align-items-center" sx={style}>
                    <h4 className="mb-2"><strong>Are you sure ?</strong></h4>
                    <p style={{ fontSize: "14px", color: "#1976D2", border: "1px solid #1976D2", width: "fit-content" }} className="mt-1 pe-2"><InfoIcon sx={{ color: "#1976D2", margin: "10px 2px", fontSize: "28px" }} />You can still retrieve the cluster from the deleted group.</p>
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
                        <button onClick={() => setOpenEmailModal(false)} className="edit-button2 mt-2 mx-1" >Keep as is</button>
                    </div>
                </Box>
            </Modal>
            <Modal
                open={openPackageModal}
                // onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="d-flex flex-column align-items-center" sx={style}>
                    <h4 className="mb-2"><strong>Package Information</strong></h4>
                    <p style={{ fontSize: "14px", color: "#1976D2", border: "1px solid #1976D2", width: "fit-content" }} className="mt-1 pe-2"><InfoIcon sx={{ color: "#1976D2", margin: "10px 2px", fontSize: "28px" }} />This package is generated on the basis of buying patterns.</p>

                    <div className="package-container w-100">
                        <h5 style={{padding:"10px", backgroundColor: "#F5F5F5" , width: "fit-content", borderRadius: "10px"}}>Product list </h5>
                        <div className="d-flex justify-content-center">
                            <div className="package-ul">
                                {packageData?.slice(0, packageData?.length - 1).map((product, index) => (
                                    <p key={index}><img src={product.productImage} className="package-img" />{product.productName}</p>
                                ))
                                }
                            </div>
                            <div className="bor package-text">
                                <p className="text-center">Original Amount</p>
                                <p>{originalAmount} $</p>
                                <p className="text-center">Discounted price</p>
                                <p>{((originalAmount) - ((originalAmount / 100) * discount)).toFixed(2)} $</p>
                                <p>Discount % applied</p>
                                <input className="package-input" value={discount} placeholder="Discount %" onChange={(e) => setDiscount(e.target.value)} type="number" />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-evenly">
                        <button onClick={handlePackageClose} className="mt-2 ms-2 btn-2">Close</button>
                    </div>
                </Box>
            </Modal>
        </div>
    </div>
};

export default ClusterPage;


