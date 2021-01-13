import React,{useState} from 'react';
import Header from "../../Components/Header";
import MainBody from "./Layout/MainBody";
import Footer from "../../Components/Footer";
import ErrorContent from "../../Components/ErrorContent";
import "../../Components/SignUpFormStyles.css";

const Main = ({name,filePath,errorMessage,setError}) =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [taskMessage,setTaskMessage] = useState({task:"",date:"",taskType:""});
    const handleClose = ()=>{
        setError({message:"",open:false});
    }
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const {message,open} = errorMessage;
    const modalStyles = {
        backgroundColor:"transparent",
    }
    const {task,date,taskType} = taskMessage;
    const modal = {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"stretch",
        flexDirection:"column",
        flexWrap:"nowrap",
        zIndex:"1001",
        position:"absolute",
        top:"30vh",
        backgroundColor:"#ffffff",
        width:"300px",
        height:"auto",
        boxShadow:"0px 2px 400px 200px rgba(0,0,0,0.14)",
        padding:"1rem",
        borderRadius:"10px",
    }
    return(
        <>
        <Header name={name} filePath={filePath} setError={setError} />
         {
            open && <ErrorContent message={message} handleClose={handleClose} />
         }

        {
            isModalVisible && (
                <div style={modal}>
                <div className="date">
                    <span>{taskType}</span>
                    <span>{date}</span>
                </div>
                <div className="message">
                <div style={modalStyles}>
                    <p>{task}</p>
                </div>
                <button onClick={()=>handleOk()} className="xButton">X</button>
                </div>
                </div>
            )
        }
        <MainBody 
            setError={setError}
            setIsModalVisible={setIsModalVisible}
            setTaskMessage={setTaskMessage}
            />
        <Footer />
        </>
    )
}

export default Main;