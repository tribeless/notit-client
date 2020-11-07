import React from "react";
import { Input } from 'antd';

const TextInputs = ({type,style}) =>{
    return (
        <Input type={type} style={style}/>
    )
}

export default TextInputs;