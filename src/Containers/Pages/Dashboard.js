import React from 'react';
import Cookies from "js-cookie";
import {useHistory} from "react-router-dom";

const Dashboard = ()=>{
    const history = useHistory();
     if (!Cookies.get('token')) {
         history.push("/sign-up");
     }
    return (
        <h1>This is a private area</h1>
    )
}

export default Dashboard;