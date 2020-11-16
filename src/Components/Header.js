import React from "react";
import Greeting from "./Greeting";
import Logo from "./Logo";
import NotitFlex from "../Containers/LandingPage/NotitFlex";
import Images from "./Images";
import TextHolder from "./TextHolder";


const Header = ({name})=>{

    return (
        <NotitFlex alignment="space-between">
            <Logo />
            <TextHolder text={name + "WorkSpace"} fontStyle="fontStyleTwo" />
            <Greeting name={name} />
            <Images src="" alt="users avatar" nwidth="15px" nheight="15px" bRadius="100%" />
        </NotitFlex>
    )
}

export default Header;