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

const Dashboard = ({data,errorMessage,setError,...rest})=>{
    return (
    
       <NotItContainer>
           
              {
                 data.usersDetails.map((item,index)=>(
                    <Main 
                        key={index} 
                        name={item.firstName} {...rest} 
                        errorMessage={errorMessage}
                        setError={setError}
                    />
                ))
                 
              }
               
       </NotItContainer>
        
    )
}

export default Dashboard;