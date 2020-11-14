import React from 'react';

const NotItParentContainer = ({bgColor,nheight,grid,children}) =>{
    const style = {
        backgroundColor: bgColor || "#ffffff",
        height:nheight || "100vh",
        display:"grid",
        gridTemplateColumns: grid || "repeat(auto-fit,minmax(50%,1fr))",
        gridTemplateRows: "1fr",
        padding:"0",
        overflowY: "hidden"
    }
   return ( 
    <div style={style}>{children}</div>
   )
}


export default NotItParentContainer;