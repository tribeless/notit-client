import React from "react";
import '../../Components/SignUpFormStyles.css';

const NotitFlex = ({direction,children,alignment}) =>{
    const styles ={
        display:"flex",
        flexDirection:direction || "row",
        alignItems:alignment || "space-between",
        fontSize:"12px"
    }
    return (
        <div style={styles} className="fontStyleTwo">{children}</div>
    )
}

export default NotitFlex;