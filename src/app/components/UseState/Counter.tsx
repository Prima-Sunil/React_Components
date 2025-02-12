import { useState } from "react";
import Text from "../Text";
import Button from "../Button";
const Counter=()=>{
    const[count,setCount]=useState(0);
    return (
        <div>
            <Text className="flex  justify-center" tag="h3">Counter {count}</Text>
            <div className="flex gap-5">
            <Button  text="increase  count" type="dotted" onClick={()=>{
                setCount(count+1);
            }}/>
            <Button text="decrease count" onClick={()=>{
                setCount(count-1);
            }}/>
            </div>
        </div>
    )
}
export default Counter;