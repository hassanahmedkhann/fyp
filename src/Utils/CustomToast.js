import React, { useEffect, useState } from 'react'
import "../Utils.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const CustomToast = ({flag,text,status}) => {


    useEffect(()=>{
        setTimeout(() => {
            flag = false
        }, 2000);
    },[])

    return (
        <div className={`toastContainer ${flag && 'display'} ${status == 1 ? 'successbg' : 'errorbg'}`}>
            <div className={`${status == 1 ? 'success' : 'error'}`}></div>
            { status == 1 ? <div className='toastIcon px-2'><CheckCircleIcon sx={{fontSize: "30px" , color: "green"}}/></div> :
            <div className='toastIcon px-2'><ErrorIcon sx={{fontSize: "30px" , color: "red"}}/></div>}
            <div className='toastText pe-3'>{text}</div>
        </div>
    )
}

export default CustomToast
