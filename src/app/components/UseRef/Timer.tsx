import React, { useRef, useState } from 'react'

const Timer =()=>{
    const[time,setTime]=useState(0);
    const timeRef = useRef<NodeJS.Timeout | null>(null);
    const StartTimer=()=>{
       timeRef.current=setInterval(()=>{
           setTime(prev=>prev+1);
       },1000)
    }
    const StopTimer=()=>{
     if (timeRef.current !== null) {
       clearInterval(timeRef.current);
     }
     timeRef.current=null;
    }
    const RestartTimer=()=>{
      StopTimer();
      setTime(0);
    }
  return (
    <div>
      <h1>StopWatch </h1>
      <h2>time :{time}</h2>
      <br></br>
      <button onClick={StartTimer}>start</button>
      <br></br>
      <br></br>
      <button onClick={StopTimer}>stop</button>
      <br></br>
      <br></br>
      <button onClick={RestartTimer}>Restart</button>
    </div>
  )
}

export default Timer
