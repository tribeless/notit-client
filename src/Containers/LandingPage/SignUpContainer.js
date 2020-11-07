import React from 'react';

const NotItContainer = ({bgColor,nheight,nwidth,borderradius,children}) =>{
    const style = {
        backgroundColor: bgColor || "#ffffff",
        height:nheight || "100vh",
        width: nwidth || "100%",
        borderRadius:borderradius || "0"
    }
   return ( 
    <div style={style} >{children}</div>
   )
}



export default NotItContainer;