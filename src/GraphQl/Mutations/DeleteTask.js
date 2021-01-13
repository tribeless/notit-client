import gql from "graphql-tag";

export const DELETE_TASK = gql `
    mutation deleteTask($taskId:String!){
        deleteTask(taskId:$taskId)
    }

`;