import React from 'react';
import {Image} from 'antd';

const Images = ({nwidth,nheight,bRadius,topMargin,...others})=>{
    const styles = {
        width:nwidth || "auto",
        height:nheight || "auto",
        borderRadius:bRadius || "none",
    }
    return (
        <Image style={styles} {...others}/>
    )
}

export default Images;