import React,{useState} from 'react';
import SignUp from '../LandingPage/SignUp';

const Main = () =>{
const [formData,setFormData] = useState({
    data:{}
});
    return(
        <SignUp formData={formData} setFormData={setFormData}/>
    )
}

export default Main;