import React from 'react';

const NotItContainer = ({
    bgColor,
    nheight,
    nwidth,
    borderradius,
    children,
    margin,
    position,
    left,
    right,
    alignment
}) =>{
    const style = {
        backgroundColor: bgColor || "#ffffff",
        height:nheight || "100vh",
        width: nwidth || "100%",
        borderRadius:borderradius || "0",
        display:"flex",
        flexDirection:alignment || "column",
        alignItems:"center",
        margin:margin || '0',
        position:position || "static",
        left:left || "0",
        right:right || "0"
        
    }
   return ( 
    <div style={style} >{children}</div>
   )
}



export default NotItContainer;