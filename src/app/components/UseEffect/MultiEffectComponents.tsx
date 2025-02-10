import React, { useEffect, useState } from 'react'
import Text from '../Text';
import Button from '../Button';
function MultiEffectComponents() {
    const[count,setcount]=useState(0);
    const[seconds,setseconds]=useState(0);
    useEffect(()=>{
        const intervel=setInterval(()=>{
            setseconds(prev=>prev+1);
        },1000)
        return()=>{
            clearInterval(intervel);
        }
    },[])
    useEffect(()=>{
        console.log("count changed",count);
    },[count]);
  return (
    <div>
      <Text tag="h1">Count: {count}</Text>
      <Button text="click me" onClick={()=>{
        setcount(count+1);
      }}></Button>
      <Text tag="h2">Seconds:{seconds}</Text>
    </div>
  )
}

export default MultiEffectComponents
