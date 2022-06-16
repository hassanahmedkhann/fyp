import React, { useEffect, useState } from 'react'
import "../Utils.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const CustomToast = ({alert, setAlert}) => {


    useEffect(()=>{
        setTimeout(() => {
            if (alert.flag) setAlert({ flag: false, status: alert.status, message: "" })
        }, 2000);
    },[alert])

    return (
        <div className={`toastContainer ${alert.flag && 'display'} ${alert.status == 1 ? 'successbg' : 'errorbg'}`}>
            <div className={`${alert.status == 1 ? 'success' : 'error'}`}></div>
            { alert.status == 1 ? <div className='toastIcon px-2'><CheckCircleIcon sx={{fontSize: "30px" , color: "green"}}/></div> :
            <div className='toastIcon px-2'><ErrorIcon sx={{fontSize: "30px" , color: "red"}}/></div>}
            <div className='toastText pe-3' style={{color: "black"}}>{alert.message}</div>
        </div>
    )
}

export default CustomToast
