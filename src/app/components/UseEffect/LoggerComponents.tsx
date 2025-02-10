import React, {useState, useEffect } from 'react'
import Button from '../Button';
import Text from '../Text';

function LoggerComponents() {
    const[count,setcount]=useState(0);
    useEffect(()=>{
        console.log("component render or count change",count);
    })
  return (
    <div>
        <Text tag="h1">Count:{count}</Text>
        <Button text="click me" onClick={()=>{
            setcount(count+1);
        }}></Button>
      
    </div>
  )
}

export default LoggerComponents
