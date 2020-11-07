import React from "react";
import {Button} from 'antd';

const NotitBtn = ({disabled,type,htmlType,text})=>{

    return (
        <Button type={type} disabled={disabled} htmlType={htmlType}>{text}</Button>
    )
}
export default NotitBtn;