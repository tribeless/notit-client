import React from "react";
import {Alert} from "antd";

const ErrorContent=({message,handleClose})=>{

    return (
        <Alert
            description={message}
            type="error"
            closable
            onClose={handleClose}
        />
    )
}

export default ErrorContent;