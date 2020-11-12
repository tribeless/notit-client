import React from 'react';
import NotItContainer from './SignUpContainer';
import signup from '../../Assets/Images/signup.png';
import NotItParentContainer from './NotitParentContainer'
import Images from '../../Components/Images';
import TextHolder from "../../Components/TextHolder";
import Forms from './Form';
import NotitFlex from './NotitFlex';
import "../../Components/SignUpFormStyles.css"
import { FaFacebookF, FaInstagram,FaTwitter} from "react-icons/fa";
import NotitStyles from '../../Components/NotitStyles';

const SignUp = ({formData,setFormData}) =>{
    const style = NotitStyles();
    return (

        <NotItParentContainer>
            <NotItContainer bgColor="#F9E2A9">
                <TextHolder fontStyle="fontStyleTwo" title="NOTIT" top="5rem"/>
                <Images src={signup} alt="landing page image" className="image"/>
            </NotItContainer>
            <NotItContainer>
                <TextHolder fontStyle="fontStyle" title="Create account" top="5rem"/>
                <Forms formData={formData} setFormData={setFormData}/>
                <NotitFlex direction="row">
                <TextHolder size="11px" fontStyle="fontStyleTwo" color="#808080" text="Already have an account? " />
                <TextHolder size="11px"
                    fontStyle="fontStyleTwo"
                    linkto="/"
                    link=" Sign in"/>
                    </NotitFlex>
                    <NotitFlex direction="row" alignment="space-evenly">
                        <TextHolder size="16px"
                            fontStyle="fontStyleTwo"
                            linkto="/"
                            link={
                                <FaFacebookF style={style.social_icons}/>
                            }/>
                        <TextHolder size="16px"
                            fontStyle="fontStyleTwo"
                            linkto="/"
                            link={
                                <FaInstagram style={style.social_icons}/>
                            }/>
                        <TextHolder size="16px"
                            fontStyle="fontStyleTwo"
                            linkto="/"
                            link={
                                <FaTwitter style={style.social_icons}/>
                            }/>
                    </NotitFlex>
            </NotItContainer>
        </NotItParentContainer>
            
    )
}

export default SignUp;