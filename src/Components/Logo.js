import Images from "./Images";
import TextHolder from "./TextHolder";
import NotitFlex from "../Containers/LandingPage/NotitFlex";
import logo from "../Assets/Images/logo.png";


const Logo = ()=>{
    return (
        <NotitFlex alignment="space-evenly">
            <Images src={logo} alt="user's avatar" nwidth="30px" nheight="30px" bRadius="100%"/>
            <TextHolder text="NOTIT" fontStyle="fontStyleTwo" />
        </NotitFlex>
    )
}

export default Logo;