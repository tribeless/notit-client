import React from "react";

const NotitFlex = ({direction,children}) =>{
    const styles ={
        display:"flex",
        flexDirection:direction || "row",
        alignItems:"space-between"
    }
    return (
        <div style={styles}>{children}</div>
    )
}

export default NotitFlex;