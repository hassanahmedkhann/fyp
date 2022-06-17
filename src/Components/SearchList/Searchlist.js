import { Avatar } from '@mui/material'
import React from 'react'
import { buttonSX } from '../../Util'
import "./Searchlist.css"


const Searchlist = ({handleClick , list}) => {
    
    return (
        <div className='searchlist-container mt-2'>
            {list.map((item, index) => (
                <div key={index} className='searchlist-box'>
                    <Avatar src={item.productImage} />
                    <div className='mx-1'>{item.productName}</div>
                    <button onClick={()=>handleClick(item)} style={buttonSX} className="account-button px-4 py-1">Select</button>
                </div>
            ))}
        </div>
    )
}

export default Searchlist