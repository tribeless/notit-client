import React from 'react';
import TextInputs from '../../Components/Inputs';
import NotitStyles from '../../Components/NotitStyles';
import NotItContainer from './SignUpContainer';
import signup from '../../Assets/Images/signup.png';
import NotItParentContainer from './NotitParentContainer'
import Images from '../../Components/Images';
import "../../Components/SignUpFormStyles.css"
const SignUpForm = () =>{
    const style = NotitStyles();

    return (

        <NotItParentContainer>
            <NotItContainer  bgColor="#F9E2A9">
                <Images src={signup} alt="landing page image" className="image"/>
            </NotItContainer>
            <NotItContainer  >
                <TextInputs placeholder="FirstName" type="text" style={style.name_inputs} />
            </NotItContainer>
        </NotItParentContainer>
            
    )
}

export default SignUpForm;