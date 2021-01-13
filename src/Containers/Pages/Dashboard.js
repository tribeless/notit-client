import React from 'react';
import NotItContainer from "../LandingPage/SignUpContainer";
import Main from "./Main";


const Dashboard = ({data,errorMessage,setError,...rest})=>{
    return (
    
       <NotItContainer>
           
              {
                 data.usersDetails.map((item,index)=>(
                    <Main 
                        key={index} 
                        name={item.firstName} {...rest} 
                        filePath={item.filePath?item.filePath:null}
                        errorMessage={errorMessage}
                        setError={setError}
                    />
                ))
                 
              }
               
       </NotItContainer>
        
    )
}

export default Dashboard;