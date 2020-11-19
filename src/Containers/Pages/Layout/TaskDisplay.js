import React from "react";
import {
    FaEllipsisV,
} from "react-icons/fa";
import TextHolder from "../../../Components/TextHolder";
import NotitFlex from "../../LandingPage/NotitFlex";

const TaskDisplay = ()=>{

    return (
        <NotitFlex 
            alignment="center" 
            alignmentX="space-around" 
            direction="row" 
            bgColor="#F1EFED" 
            bRadius="10px"
            width="200px"
            padding="1rem"
            margin="2rem 0 0 0 "
        >
            <TextHolder text="Need to finish designs" fontStyle="fontStyleTwo" size="14px" top="0" />
            <FaEllipsisV style={{color:"#8D8D8D"}} />
        </NotitFlex>
    )
}

export default TaskDisplay;