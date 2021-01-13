import React from 'react';
import {Image} from 'antd';

const Images = ({styles,divClass,...rest})=>{

    return (
        <img className={divClass} {...rest} />
    )
}

export default Images;