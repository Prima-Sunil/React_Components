import React, { useRef } from 'react'

function ChangeBackGround() {
    // create reference
    const btnRef = useRef<HTMLButtonElement>(null);  
    // change ref 
    const changeColor=()=>{
        if (btnRef.current) {
            btnRef.current.style.backgroundColor = "red";
        }
    }
  return (
    <div>
      <button
    //   use ref
      ref={btnRef} onClick={()=>{
        console.log("hlo");
      }}>btn1</button>
      <br>
      </br>
      <button onClick={changeColor}>change btn1 color</button>
    </div>
  )
}

export default ChangeBackGround
