import React from "react";
import NotitFlex from "../../LandingPage/NotitFlex";
import TaskBar from "./TaskBar";
import TaskDisplay from "./TaskDisplay";
import AddTask from "../Tasks/Tasks";

const TaskLayout = ()=>{
    
    return (
        <NotitFlex alignment="center" alignmentX="space-around" direction="column" width="300px">
            <TaskBar />
            <TaskDisplay />
            <AddTask />
        </NotitFlex>
    )
}

export default TaskLayout;