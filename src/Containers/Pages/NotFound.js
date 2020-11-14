import React from 'react';
import SignUpContainer from '../LandingPage/SignUpContainer';
import TextHolder from '../../Components/TextHolder';
import NotItBtn from '../../Components/NotitBtn';
import {Link} from 'react-router-dom'

const NotFound = () =>{
    return (
        <SignUpContainer nheight="50px" bgColor="#F9E2A9">
            <TextHolder text="Uooh,the page you are looking for is not available. Please contact us if the problem persists." />
            <Link to="/">
                <NotItBtn nwidth="130px" htmlType="button" type="button" text="Go to Dashboard"/>
            </Link>
        </SignUpContainer>
    )
}

export default NotFound;