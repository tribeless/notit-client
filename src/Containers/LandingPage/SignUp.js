import React from 'react';
import NotItContainer from './SignUpContainer';
import signup from '../../Assets/Images/signup.png';
import NotItParentContainer from './NotitParentContainer'
import Images from '../../Components/Images';
import TextHolder from "../../Components/TextHolder";
import Forms from './Form';
import "../../Components/SignUpFormStyles.css"

const SignUp = () =>{
    

    return (

        <NotItParentContainer>
            <NotItContainer bgColor="#F9E2A9">
                <TextHolder title="NOTIT" />
                <Images src={signup} alt="landing page image" className="image"/>
            </NotItContainer>
            <NotItContainer>
                <TextHolder title="Create account" />
                <Forms />
            </NotItContainer>
        </NotItParentContainer>
            
    )
}

export default SignUp;