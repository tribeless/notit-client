import React from 'react';
import Header from "../../Components/Header";
import MainBody from "./Layout/MainBody";
import Footer from "../../Components/Footer";

const Main = ({name}) =>{
    return(
        <>
        <Header name={name} />
        <MainBody />
        <Footer />
        </>
    )
}

export default Main;