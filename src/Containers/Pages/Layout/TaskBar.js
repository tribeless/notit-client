import React from "react";
import {
    FaEllipsisV,
} from "react-icons/fa";
import {
     MdAdd
} from "react-icons/md";
import NotitFlex from "../../LandingPage/NotitFlex";
import TextHolder from "../../../Components/TextHolder";
import NotItContainer from "../../LandingPage/SignUpContainer";


const TopBar = ()=>{

    return (
        <NotItContainer 
            alignment="row" 
            alignmentX="center" 
            content="space-around"  
            nheight="auto"
            >
            <NotitFlex direction="row" alignment="center" alignmentX="space-around" margin="0 0 0 -1.9rem">
            <NotitFlex alignment="center" bgColor="#FF8D8D" margin="0 1.5rem 0 0">
                <TextHolder text="New" size="11px" fontStyle="fontStyleTwo" top="0"/>
            </NotitFlex>
            <TextHolder text="1" size="11px" top="0"/>
            </NotitFlex>
                
            <NotitFlex alignment="center" alignmentX="space-around" margin="0 -1.2rem 0 0">
                <FaEllipsisV style={{color:"#8D8D8D"}}  />
                <MdAdd style={{color:"#8D8D8D"}}  />
            </NotitFlex>
        </NotItContainer>
    )
}

export default TopBar;