
import React from 'react'
import Example from './Example'
import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material'


function Display({count}) {
    const navigate=useNavigate()
    const HandleClick=()=>{
        navigate("/")
    }
    return (
        <div>
            <center>
            <h1 style={{color:'green'}}>Thank For Participation Quize</h1>
          <Button variant='contained' onClick={HandleClick}> Back To Quize</Button>  
            </center>
            
           


            
        </div>
    )
}

export default Display

