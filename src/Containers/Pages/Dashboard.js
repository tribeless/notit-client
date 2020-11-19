import React from 'react';
import {useHistory} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import {GET_USERS} from "../../GraphQl/Queries/GetTasks";
import {CLIENT_QUERY} from "../../GraphQl/Queries/GraphQlClientQueries";
import Spinner from "../../Components/Loader";
import NotItContainer from "../LandingPage/SignUpContainer";
import Main from "./Main";

const Dashboard = ()=>{
    const history = useHistory();
    const {loading,data} = useQuery(GET_USERS);
    const {data:{isLoggedIn}} = useQuery(CLIENT_QUERY);

     if (!isLoggedIn) {
         history.push("/sign-in");
     }

    return (
    
       <NotItContainer>
             {loading ? (<Spinner />) : data.usersDetails.map((item,index)=>(
           <Main key={index} name={item.firstName}/>
       ))}
       </NotItContainer>
        
    )
}

export default Dashboard;