import React from 'react';
import { Typography } from 'antd';
import './SignUpFormStyles.css';

const TextHolder = ({title,text,paragraph,link,linkto,color,fontStyle,size,top,disabled})=>{
      const {Title,Text,Paragraph,Link} = Typography;
      const styles={
            color:color || "#000000",
            fontSize: size || "1.625rem",
            marginTop:top || "21.580px"
      }
        if(title){
              return <Title className={fontStyle} level={2} style={styles} disabled={disabled}>{title}</Title>
        }
        else if(text){
              return <Text className={fontStyle} style={styles} disabled={disabled}>{text}</Text> 
        }
        else if(paragraph){
              return <Paragraph className={fontStyle} style={styles} disabled={disabled}>{paragraph}</Paragraph>
        }  
        else if(link) {
              return <Link className={fontStyle} href={linkto} style={styles} disabled={disabled}>{link}</Link>
        }
        else{
               return <Text className={fontStyle} style={styles} disabled={disabled}>{text}</Text>
       }
 }


export default TextHolder;