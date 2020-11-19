import React from "react";
import TaskLayout from "./TaskLayout";
import NotItContainer from "../../LandingPage/SignUpContainer";


const MainBody = ()=>{

    return (
        <NotItContainer
            alignment="row"
            nheight="300px"
            alignmentX="flex-start"
            content="space-between"
            margin="4.5rem 0 0 0"
        >
            <TaskLayout />
            <TaskLayout />
            <TaskLayout />
        </NotItContainer>
    )
}

export default MainBody;