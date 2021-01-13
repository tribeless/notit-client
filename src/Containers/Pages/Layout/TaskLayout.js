import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {LoadingOutlined} from "@ant-design/icons";
import {GET_TASKS} from "../../../GraphQl/Queries/GetTasks";
import NotItContainer from "../../LandingPage/SignUpContainer";
import NewTask from "./NewTask";
import InProgressTask from "./InProgressTask";
import CompletedTask from "./CompletedTask";
import filterTaskType from "../../../Utils/FilterTaskType";

const TaskLayout = ({
        setError,
        setIsModalVisible,
        setTaskMessage
    }) => {
    const {loading,data} = useQuery(GET_TASKS);
    return (
        loading ? 
        (<LoadingOutlined  style={{position:"absolute",top:"30vh",fontSize:"2rem",color:"black"}}/>)
        :(
        <NotItContainer
            alignment="row"
            nheight="300px"
            alignmentX="flex-start"
            content="space-between"
            margin="9rem 0 0 0"
            flex=" 1 1 0"
            wrap="wrap"
            
        >
            <NewTask 
                setError={setError} 
                tasks={filterTaskType("new",data)} 
                setIsModalVisible={setIsModalVisible}
                setTaskMessage={setTaskMessage}
                />
            <InProgressTask 
                setError={setError} 
                tasks={filterTaskType("inProgress",data)}
                setIsModalVisible={setIsModalVisible}
                setTaskMessage={setTaskMessage}
                />
            <CompletedTask 
                setError={setError} 
                tasks={filterTaskType("completed",data)}
                setIsModalVisible={setIsModalVisible}
                setTaskMessage={setTaskMessage}
                />
        </NotItContainer>
        )
    )
}

export default TaskLayout;