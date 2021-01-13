import React from "react";
import TaskLayout from "./TaskLayout";

const MainBody = ({
        setTaskMessage,
        setError,
        setIsModalVisible
    }) => {

    return (
            <TaskLayout 
                setError={setError}
                setIsModalVisible={setIsModalVisible}
                setTaskMessage={setTaskMessage}
            />
    )
}

export default MainBody;