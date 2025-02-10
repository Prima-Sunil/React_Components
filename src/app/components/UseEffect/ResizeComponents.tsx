"use client";

import React, { useEffect, useState } from "react";
import Text from "../Text";

function ResizeComponents() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
     
             const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            console.log("Event listener added");
            window.addEventListener("resize", handleResize);

            return () => {
                console.log("Removing event listener");
                window.removeEventListener("resize", handleResize);
        
        }
    }, []); 

    return (
        <div>
            <Text tag="h1">Window Width: {windowWidth}</Text>
        </div>
    );
}

export default ResizeComponents;
