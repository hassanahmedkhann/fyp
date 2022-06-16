import React, { useState } from 'react'
import "./authstyles.css"
import logo from "../../Images/sampleIcon8.PNG";
import { buttonSX } from '../../Util';
import Notification from '../../Utils/Notification';
import Loader from '../../Utils/Loader';
import { postRequest } from '../../Api-Interaction/api-Interaction';
import ForgotPassword from './ForgotPassword';
import { useNavigate } from 'react-router-dom';
const ReceiveOTP = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState(null);
    const [alert, setAlert] = useState({
        flag: false,
        status: 1,
        message: ""
    });
    const [open, setOpen] = useState(false);


    const handleSubmit = async () => {

        if (!email?.length || email == null) return setAlert({ flag: true, 'status': 2, message: "Required field!" });


        const essentials = {
            endPoint: '/sendOTP',
            body: { email }
        }

        try {
            setOpen(true)
            let resultHandle = await postRequest(essentials);

            if (resultHandle?.success === true) {
                setOpen(false);
                setAlert({ flag: true, 'status': 1, message: resultHandle?.message?.Success });
                console.log(resultHandle?.message)
                localStorage.setItem('email', JSON.stringify(email))
                navigate('/forgot-2')
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
        placeholder: "abc@xyz.com",
        type: "email"
    }

    const headings = {
        heading: "Enter the email associated with your account.",
        subHeading: "Please make sure you have access to that email."
    }

    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    return (<>
        <ForgotPassword headings={headings} inputData={inputData} handleSubmit={handleSubmit} handleChange={handleChange} />
        <Notification alert={alert} setAlert={setAlert} />
        <Loader open={open} />
    </>)
}

export default ReceiveOTP