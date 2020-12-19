import React from 'react';
import Header from "../../Components/Header";
import MainBody from "./Layout/MainBody";
import Footer from "../../Components/Footer";
import ErrorContent from "../../Components/ErrorContent";

const Main = ({name,errorMessage,setError}) =>{
    const handleClose = ()=>{
        setError({message:"",open:false});
    }
    const {message,open} = errorMessage;
    console.log(message,open)
    return(
        <>
        <Header name={name} />
         {
            open && <ErrorContent message={message} handleClose={handleClose} />
         }
                
        <MainBody 
            errorMessage={errorMessage}
            setError={setError}
            />
        <Footer />
        </>
    )
}

export default Main;