import React from 'react';
import { Typography } from 'antd';

const TextHolder = ({title,text,paragraph})=>{
        const {Title,Text,Paragraph} = Typography;

        if(title){
              return <Title level={2}>{title}</Title>
        }
        else if(text){
              return <Text>{text}</Text> 
        }
        else if(paragraph){
              return <Paragraph>{paragraph}</Paragraph>
        }   
        else{
               return <Text>{text}</Text>
       }
 }


export default TextHolder;