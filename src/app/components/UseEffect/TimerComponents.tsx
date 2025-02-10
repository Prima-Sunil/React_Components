import React, { useEffect, useState } from 'react'
import Text from '../Text'
function TimerComponents() {
    const[seconds,setseconds]=useState(0);
    useEffect(()=>{
       
        const intervel=setInterval(()=>{
            console.log("time",seconds)
            setseconds(prev=>prev+1);
        },1000)
        return ()=>{
            console.log("clear time ");
            clearInterval(intervel);
        }
    },[])
  return (
    <div>
      <Text tag="h1">Seconds :{seconds}</Text>
    </div>
  )
}

export default TimerComponents
