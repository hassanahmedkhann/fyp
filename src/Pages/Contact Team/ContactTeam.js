import React from 'react'
import "./ContactTeam.css"
import EmailIcon from '@mui/icons-material/Email';

const ContactTeam = ({memberInfo}) => {

    const mailStyle = {
        color: "white",
        textDecoration: "none"
    }

    return (
        <div className='team-card'>
            <img src={memberInfo.picture} className='team-image'/>
            <div className='team-text'>
            <p>{memberInfo.name}</p>
            <p>Designation: {memberInfo.designation}</p>
            <a style={mailStyle} href = {`mailto: ${memberInfo.email}`}>Send EMAIL <EmailIcon/></a>
            </div>
        </div>
    )
}

export default ContactTeam
