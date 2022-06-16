import React, { useState } from 'react'
import "./authstyles.css"
import logo from "../../Images/sampleIcon8.PNG";
import { buttonSX } from '../../Util';
import Notification from '../../Utils/Notification';
import Loader from '../../Utils/Loader';
import { postRequest } from '../../Api-Interaction/api-Interaction';
import ForgotPassword from './ForgotPassword';
import { useNavigate } from 'react-router-dom';
const CreateNewPassword = () => {

    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [alert, setAlert] = useState({
        flag: false,
        status: 1,
        message: ""
    });

    const [open, setOpen] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }

    const handleSubmit = async () => {


        if (!password?.length) return setAlert({ flag: true, 'status': 2, message: "Required field!" });
        if (!cPassword?.length) return setAlert({ flag: true, 'status': 2, message: "Required field!" });
        if (cPassword !== password) return setAlert({ flag: true, 'status': 2, message: "Passwords don't match!" });


        const email = JSON.parse(localStorage.getItem('email'))

        const essentials = {
            endPoint: '/change-password',
            body: { email, newPassword: password }
        }

        try {
            setOpen(true)
            let resultHandle = await postRequest(essentials);

            if (resultHandle?.success === true) {
                setOpen(false);
                setAlert({ flag: true, status: 1, message: resultHandle?.message?.Success });
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }
            else {
                setAlert({ flag: true, status: 2, message: resultHandle?.data.Error });
                setOpen(false)
            }

        }
        catch (err) {
            setOpen(false)
            setAlert({ flag: true, 'status': 2, message: "Server error!" });
        }
    }

    const inputData = {
        placeholder: "Enter new password.",
        placeholder2: "Confirm new password.",
        type: `${show ? 'text' : 'password'}`
    }

    const headings = {
        heading: "Enter a new password.",
        subHeading: "Please make sure that the passwords match!"
    }

    const handlePass = (event) => {
        setPassword(event.target.value)
    }

    const handleNewPass = (event) => {
        setCPassword(event.target.value)
    }

    return (<>
        <ForgotPassword headings={headings} inputData={inputData} handleSubmit={handleSubmit} handleChange={handlePass} handleChange2={handleNewPass} button={"Create new password"} handleShow={handleShow} />
        <Notification alert={alert} setAlert={setAlert} />
        <Loader open={open} />
    </>)
}

export default CreateNewPassword