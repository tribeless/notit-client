import React from 'react';
import SignUpContainer from '../LandingPage/SignUpContainer';
import TextHolder from '../../Components/TextHolder';
import NotItBtn from '../../Components/NotitBtn';
import {Link} from 'react-router-dom'

const NotFound = () =>{
    return (
        <SignUpContainer nheight="50px" bgColor="red">
            <TextHolder text="The page you are looking for is not found. Please contact as if the problem persists." />
            <Link to="/sign-up">
                <NotItBtn htmlType="button" type="button" text="Go to Dashboard"/>
            </Link>
        </SignUpContainer>
    )
}

export default NotFound;