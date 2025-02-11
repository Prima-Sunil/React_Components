import { useRef } from "react";

const Counter =()=>{
    const ref=useRef(0);
    const handleIncrement=()=>{
        ref.current=ref.current+1;
        console.log(ref.current);
    }
    return (
        <div>
       <h1>Count: {ref.current}</h1>
       <button onClick={handleIncrement}>Click me</button>
        </div>
    )
}

export default Counter;