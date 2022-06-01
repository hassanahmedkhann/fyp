import React from 'react'
import "./ContactTeam.css"
import EmailIcon from '@mui/icons-material/Email';

const ContactTeamCard = ({ memberInfo }) => {

    const cardStyle = {
        height: "350px",
        width: "350px",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s all",
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
    }

    const imageStyle = {
        width: "150px",
        height: "150px",
        borderRadius: "50%"
    }

    return (
        <div style={cardStyle} className='bg-white testCard mb-2'>
            <img className='mt-4' style={imageStyle} src={memberInfo.picture} />
            <p className='mt-3'>{memberInfo.name}</p>
            <p><strong>{memberInfo.designation}</strong></p>
            <button className='testButton mb-4'>Send Email</button>
        </div>
    )
}

export default ContactTeamCard