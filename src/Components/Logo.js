import React from "react";
import TextHolder from "./TextHolder";
import NotitFlex from "../Containers/LandingPage/NotitFlex";
import logo from "../Assets/Images/logo.png";


const Logo = ()=>{
    return (
        <NotitFlex alignment="center" alignmentX="center">
            <img src={logo} alt="notit logo" style={{width:"30px",height:"30px",borderRadius:"100%"}} />
            <TextHolder size="20px" text="NOTIT" fontStyle="fontStyleTwo" top="0"/>
        </NotitFlex>
    )
}

export default Logo;