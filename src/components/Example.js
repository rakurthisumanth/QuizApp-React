
import React,{useState} from 'react'
import Questions from './Questions.json'
import {useNavigate} from 'react-router-dom'
import { Button, Card, Paper } from '@mui/material'
import { color, style } from '@mui/system'
import "./Sample.css"


function Example() {
    const navigate=useNavigate()
    const [idno,setidno]=useState(1)
    const [count,setcount]=useState(0)

   


  const HandleBack=()=>{
      navigate("/Display")

  }

    return (
        <div>
        
        {Questions.filter(res=>res.id==idno).map(req=>{
            return(
                <div>
                 <br/><br/>
                    <center>
                    <Paper style={{height:"90vh",width:"70vh",backgroundColor:"pink"}} >
                    <br/>
                        <h1 style={{color:'red'}}>Quizee</h1><br/><br/>
                   <div> <h1 style={{color:'blue'}}>{req.question}</h1></div><br/>
                   <Button style={{width:"52vh"}} variant='contained'  onClick={()=>{;{if(req.answer==req.optionA){setcount(count+1)};setidno(idno+1)}}}   ><div>{req.optionA}</div></Button><br/><br/>
                   <Button style={{width:"52vh"}} variant='contained' onClick={()=>{{if(req.answer==req.optionB){setcount(count+1)};setidno(idno+1)}}}  ><div    >{req.optionB}</div></Button><br/><br/>

                   <Button style={{width:"52vh"}} variant='contained' onClick={()=>{{if(req.answer==req.optionC){setcount(count+1)};setidno(idno+1)}}} ><div >{req.optionC}</div></Button>< br/><br/>
                   <Button style={{width:"52vh"}} variant='contained' onClick={()=>{{if(req.answer==req.optionD){setcount(count+1)};setidno(idno+1)}}} ><div >{req.optionD}</div></Button><br/><br/><br/>

                   </Paper>
                   </center>
                   </div>
            )
        })}
       <div
       >
        <div>
            <center>
                <br/><br/>
               
   {
          idno>15 ? (<h1 style={{color:'green'}}>
              <h3 style={{color:"red"}}>Each Question Carries 5 marks Total 75 marks</h3>
          <br/>
          No Of  Correct Answers are - {count} <br/><br/>
          No Of Incorrect Answers are - {15-count} <br/>
          <h1>Your Total Scoure Is - {count*5}/75</h1>
          <Button  onClick={HandleBack} variant='contained'>Submit</Button> </h1>):(null)
   }
   
   </center>
   </div>
       </div>
     
      
    
        </div>
    )
}


export default Example
