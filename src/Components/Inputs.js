import React from "react";
import { Input } from 'antd';

const TextInputs = ({placeholder,type,style}) =>{
    return (
        <Input placeholder={placeholder} type={type} style={style}/>
    )
}

export default TextInputs;