import gql from "graphql-tag";

export const ADD_USER_TASK = gql`
    mutation addTasks($input:InputTasks!){
        addTasks(input:$input){
            status
            message
        }
    }

`;

export const UPDATE_USER_TASK = gql `
    mutation updateTask($input:UpdateTasks!){
        updateTask(input:$input){
            status
            message
        }
    }
`;

export const DELETE_USER_TASK = gql`
    mutation deleteTask($taskId:String!){
        deleteTask(taskId:$taskId){
            status
            message
        }
    }
`;