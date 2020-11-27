import React from 'react';
import {useHistory} from "react-router-dom";
import Cookies from 'universal-cookie';
import {useQuery} from "@apollo/react-hooks";
import {GET_USERS} from "../../GraphQl/Queries/GetTasks";
import {CLIENT_QUERY} from "../../GraphQl/Queries/GraphQlClientQueries";
import Spinner from "../../Components/Loader";
import NotItContainer from "../LandingPage/SignUpContainer";
import Main from "./Main";
import GraphQlErrors from "../../Utils/GraphQlErrors";

const Dashboard = ()=>{
    const history = useHistory();
    const cookies = new Cookies();
    const {loading,data,error} = useQuery(GET_USERS);
    
     if (!cookies.get("signedin")) {
         history.push("/sign-in");
     }

    return (
    
       <NotItContainer>
           
              {
                 error ? (<GraphQlErrors error={error} />) : (
                    loading ? (<Spinner />) : data.usersDetails.map((item,index)=>(
                <Main key={index} name={item.firstName}/>
                ))
                 )
              }
               
       </NotItContainer>
        
    )
}

export default Dashboard;