import React from "react";
import Greeting from "./Greeting";
import Logo from "./Logo";
import NotitFlex from "../Containers/LandingPage/NotitFlex";
import Images from "./Images";
import TextHolder from "./TextHolder";

const Header = ({name})=>{

    return (
        <NotitFlex 
            alignment="center" 
            alignmentX="space-between" 
            width="100%"
            shadow="1px 7px 6px 0px rgba(0,0,0,0.65)"
            padding="16px 0"
        >
            <Logo />
            <NotitFlex>
             {/* eslint-disable-next-line */}
            <TextHolder text={name + "'s" + " WorkSpace"} fontStyle="fontStyleTwo" top="0" />
            </NotitFlex>
            <NotitFlex>
            <Greeting name={name} />
            </NotitFlex>
            <Images src="" alt="users avatar" nwidth="15px" nheight="15px" bRadius="100%" />
        </NotitFlex>
    )
}

export default Header;