import React from "react";
import {CgOptions} from "react-icons/cg";
import {useHistory,Link} from "react-router-dom";
import {useMutation,useApolloClient} from "@apollo/react-hooks";
import Greeting from "./Greeting";
import Logo from "./Logo";
import NotitFlex from "../Containers/LandingPage/NotitFlex";
import {SIGN_OUT} from "../GraphQl/Mutations/SignOut";
import Images from "./Images";
import TextHolder from "./TextHolder";
import graphQlErrors from "../Utils/Errors";
import "./SignUpFormStyles.css";
import logo from "../Assets/Images/logo.png";

const Header = ({name,filePath,setError})=>{
    const history = useHistory();
    const client = useApolloClient();
    const [LogOutMutation] = useMutation(SIGN_OUT);
    const [open, setOpen] = React.useState(false);
    const options = {
        fontSize:"17px",
        position:"relative",
        left:"-2rem"
    }

    const logOut = ()=>{
        LogOutMutation()
        .then((res)=>{
            if(res){
                client.resetStore();
                history.push("/sign-in")
            }
        })
        .catch((err)=>setError({message:graphQlErrors(err),open:true}))
    }
    return (
        <NotitFlex 
            alignment="center"
            position="fixed" 
            alignmentX="space-between" 
            width="100%"
            bottom="90%"
            shadow="1px 7px 6px 0px rgba(0,0,0,0.65)"
            padding="16px 0"
        >
            <Logo />
            <NotitFlex>
             {/* eslint-disable-next-line */}
            <TextHolder text={name + "'s" + " WorkSpace"} size="20px" fontStyle="fontStyleTwo" top="0" />
            </NotitFlex>
            <NotitFlex>
            <Greeting name={name} />
            </NotitFlex>
            <Images src={filePath?filePath:logo} alt="users avatar" divClass={!filePath && "notit-pg"} />
            <div className={open ? "bigger" : "dropdown"}>
                <CgOptions style={options} onClick={()=>setOpen(!open)} />
                <div className={open ? "dropdown-content when-clicked":"dropdown-content"}>
                    <Link to="/profile">Your Profile</Link>
                    <a href="#" onClick={()=>logOut()}>Sign Out</a>
                </div>
            </div>
        </NotitFlex>
    )
}

export default Header;