import { Avatar } from '@mui/material'
import React from 'react'
import { buttonSX } from '../../Util'
import "./Searchlist.css"


const Searchlist = ({handleClick}) => {
    const list = [
        {productName: "123"},
        {productName: "123"},
        {productName: "123"},
        {productName: "123"},
        {productName: "123"},
        {productName: "123"},
    ]
    return (
        <div className='searchlist-container'>
            {list.map((item) => (
                <div className='searchlist-box'>
                    <Avatar />
                    <div>{item.productName}</div>
                    <button onClick={handleClick} style={buttonSX} className="account-button px-4 py-1">Select</button>
                </div>
            ))}
        </div>
    )
}

export default Searchlist