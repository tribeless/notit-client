import React from "react";
import NotitFlex from "../../LandingPage/NotitFlex";
import TaskBar from "./TaskBar";
import TaskDisplay from "./TaskDisplay";
import AddTask from "../Tasks/Tasks";

const TaskLayout = ({
        errorMessage,
        setError
    }) => {
    
    return (
        <NotitFlex alignment="center" alignmentX="space-around" direction="column" width="300px">
            <TaskBar />
            <TaskDisplay />
            <AddTask 
                errorMessage={errorMessage}
                setError={setError}
            />
        </NotitFlex>
    )
}

export default TaskLayout;