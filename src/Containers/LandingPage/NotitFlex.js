import React from "react";
import '../../Components/SignUpFormStyles.css';


const NotitFlex = ({
        direction,
        children,
        alignment,
        alignmentX,
        width,
        shadow,
        position,
        bottom,
        padding,
        bgColor,
        margin,
        bRadius,
        onClick,
    }) => {
    // const shadowStyle = NotitStyles();
    const styles ={
        display:"flex",
        flexDirection:direction || "row",
        alignItems:alignment || "space-between",
        justifyContent:alignmentX || "stretch",
        fontSize:"12px",
        width:width || "auto",
        boxShadow:shadow || "none",
        position:position || "static",
        bottom:bottom || "0",
        margin:margin || '0',
        padding:padding || "0",
        backgroundColor:bgColor || "#ffffff",
        borderRadius:bRadius || "0"
    }
    return (
        <div onClick={onClick} style={styles} className="fontStyleTwo">{children}</div>
    )
}

export default NotitFlex;