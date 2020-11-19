import React from "react";
import NotitFlex from "../Containers/LandingPage/NotitFlex";
import FooterMessage from "./FooterMessage";

const Footer = ()=>{

    return (
        <NotitFlex 
            alignment="center" 
            alignmentX="center" 
            width="100%"
            shadow="0px -5px 5px 1px rgba(0,0,0,0.5)"
            position="fixed"
            bottom="0"
            padding="14px 0"
        >
            <FooterMessage />
            
        </NotitFlex>
    )
}

export default Footer;