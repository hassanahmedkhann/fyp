import React, { useState, useEffect } from 'react'
import "./authstyles.css"
import logo from "../../Images/sampleIcon8.PNG";
import { buttonSX } from '../../Util';
import Notification from '../../Utils/Notification';
import Loader from '../../Utils/Loader';
import { postRequest } from '../../Api-Interaction/api-Interaction';
import ForgotPassword from './ForgotPassword';
import { useNavigate } from 'react-router-dom';

const SendOTP = () => {

    const navigate = useNavigate()

    const [otp , setOTP] = useState('')

    const [alert, setAlert] = useState({
        flag: false,
        status: 1,
        message: ""
    });
    const [open, setOpen] = useState(false);

    const handleChange = (event) =>{
        setOTP(event.target.value)
    }

    const handleSubmit = async () => {

        if (!otp?.length || otp == null) return setAlert({ flag: true, 'status': 2, message: "Required field!" });

        const body = {
            email: JSON.parse(localStorage.getItem('email')),
            otp: otp
        }

        const essentials = {
            endPoint: '/receiveOTP',
            body :body
        }

        setOpen(true)

        try {
            setOpen(true)
            let resultHandle = await postRequest(essentials);

            if (resultHandle?.success === true) {
                setOpen(false);
                setAlert({ flag: true, 'status': 1, message: "OTP Verified!" });
                setTimeout(() => {
                navigate('/forgot-3')
                }, 1000);
            }
            else {
                setAlert({ flag: true, 'status': 2, message: resultHandle?.data.Error });
                setOpen(false)
            }

        }
        catch (err) {
            setOpen(false)
            setAlert({ flag: true, 'status': 2, message: "Server error!" });
        }
    }

    const inputData = {
        placeholder: "Enter OTP",
        type: "text"
    }

    const headings = {
        heading: "An OTP code has been sent to your email.",
        subHeading: "Please enter the OTP code."
    }

    return (<>
        <ForgotPassword headings={headings} inputData={inputData} handleSubmit={handleSubmit} handleChange={handleChange} />
        <Notification alert={alert} setAlert={setAlert} />
        <Loader open={open} />
    </>
    )
}

export default SendOTP