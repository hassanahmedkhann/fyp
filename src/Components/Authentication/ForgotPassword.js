import React from 'react'
import "./authstyles.css"
import logo from "../../Images/sampleIcon8.PNG";
import { buttonSX } from '../../Util';

const ForgotPassword = ({headings, inputData, handleChange, handleSubmit, handleChange2, button = "Submit", handleShow}) => {
    return (
        <div className='forgot-container'>
            <div className='forgot-box'>
                <img alt="logo" src={logo} />
                <h5 className='mb-2 mt-4'>{headings.heading}</h5>
                <p className='my-2'>{headings.subHeading}</p>
                <input placeholder={inputData.placeholder} type={inputData.type} onChange={handleChange} className="my-2" />
                {inputData.placeholder2 && <input placeholder={inputData.placeholder2} type={inputData.type} onChange={handleChange2} className="mb-4" />}
                {inputData.placeholder2 && <label onClick={handleShow} className='mb-2'>Show/Hide passwords.</label>}
                <button onClick={handleSubmit} style={buttonSX} className='account-button my-4 py-1'>{button}</button>
            </div>
        </div>
    )
}

export default ForgotPassword