// "use client"; // Required for event handling in App Router

// import { useState } from "react";
// import Button from "./components/Button";
// import Input from "./components/Input";

// export default function Home() {
//   const [text, setText] = useState("");

//   const handleClick = () => {
//     alert(`Button Clicked! Input Value: ${text}`);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
//       <h1 className="text-2xl font-bold">Reusable Button  nd Input</h1>
//       <Input value={text} onChange={(e) => setText(e.target.value)} />
//       <Button text="Click here" onClick={handleClick} />
//     </div>
//   );
// }



// "use client"; // Required for event handling in Next.js App Router

// import Button from "./components/Button";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100">
//       <h1 className="text-2xl font-bold">Reusable Button Component</h1>

//       <Button text="Filled Button" onClick={() => alert("Filled Button Clicked")} />

//       <Button text="Outline Button" type="outline" onClick={() => alert("Outline Button Clicked")} />

//       <Button text="Dotted Button" type="dotted" onClick={() => alert("Dotted Button Clicked")} />
//     </div>
//   );
// }




"use client"; 

import Button from "./components/Button";
import Input from "./components/Input";

const LeftArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const RightArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Reusable Button Component</h1>

     
      <Button text="Filled Button" onClick={() => alert("Filled Button Clicked")} />

      <Button text="Outline Button" type="outline" onClick={() => alert("Outline Button Clicked")} />

      <Button text="Dotted Button" type="dotted" onClick={() => alert("Dotted Button Clicked")} />

  
      <Button 
        text="Left" 
        leftIcon={LeftArrowIcon} 
        onClick={() => alert("Left Icon Button Clicked")} 
      />

      <Button 
        text="Right" 
        rightIcon={RightArrowIcon} 
        onClick={() => alert("Right Icon Button Clicked")} 
      />
      
   <Input value={""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      } }/>
      <p className="font-extrabold text-2xl text-red-400">hlo sunil</p>
      
    </div>
  );
}
