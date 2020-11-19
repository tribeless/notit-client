import React from "react";
import TextHolder from "./TextHolder";

const Greeting = ({name})=>{
     const date = new Date();

     const hours = date.getHours();

     if (hours > 11 && hours < 17) {
         return <TextHolder size="17px" text={"Good Afternoon " + name} top="0"/>;
     } else if (hours > 16 ) {
         return <TextHolder size="17px" text={"Good Evening " + name} top="0"/>;
     } else {
         return <TextHolder size="17px" text={"Good Morning " + name} top="0"/>;
     }
}

export default Greeting;