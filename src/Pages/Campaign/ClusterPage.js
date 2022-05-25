import React, { useEffect, useState } from "react";
import "./Campaign.css"
import { useLocation, useNavigate } from "react-router-dom"
import Notification from "../../Utils/Notification";
import Loader from "../../Utils/Loader";
import { getRequest } from "../../Api-Interaction/api-Interaction";
import { Button } from "@mui/material";
import { BackButton, ButtonSX } from "../../Util";
const ClusterPage = () => {

    const navigate = useNavigate()

    const { state } = useLocation()

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

    return <div className="cluster-page">
        <Loader open={open} />
        <Notification alert={alert} setAlert={setAlert} />
        <div className="m-4 cluster-page-card">
            <div className="clusterPageCard">
                <div className="cluster-page-header my-3">
                    <Button onClick={()=> navigate('/campaign')} className="account-button mb-3" sx={BackButton}>Back</Button>
                    <h1>Cluster No. {clusterData?.clusterNumber}</h1>
                    <h3>Total Members: {clusterData?.totalCustomers}</h3>
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
                <button className="btn-1 my-3 mx-2">Eliminate Cluster</button>
                <button className="btn-2 my-3 mx-2">Start Email Campaign</button>
            </div>
        </div>
    </div>;
};

export default ClusterPage;
