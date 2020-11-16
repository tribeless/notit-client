import React from "react";
import TextHolder from "./TextHolder";

const Greeting = ({name})=>{
     const date = new Date();

     const hours = date.getHours();

     if (hours > 12 && hours < 16) {
         return <TextHolder text={"Good Afternoon " + name}/>;
     } else if (hours > 16) {
         return <TextHolder text={"Good Evening " + name}/>;
     } else {
         return <TextHolder text={"Good Morning " + name}/>;
     }
}

export default Greeting;