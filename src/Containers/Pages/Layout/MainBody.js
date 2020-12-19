import React from "react";
import TaskLayout from "./TaskLayout";
import NotItContainer from "../../LandingPage/SignUpContainer";


const MainBody = ({
        errorMessage,
        setError
    }) => {

    return (
        <NotItContainer
            alignment="row"
            nheight="300px"
            alignmentX="flex-start"
            content="space-between"
            margin="4.5rem 0 0 0"
        >
            <TaskLayout 
                errorMessage={errorMessage}
                setError={setError}
            />
            <TaskLayout 
                errorMessage={errorMessage}
                setError={setError}
            />
            <TaskLayout 
                errorMessage={errorMessage}
                setError={setError}
            />
        </NotItContainer>
    )
}

export default MainBody;