import gql from "graphql-tag";

export const UPDATE_TASK = gql `
    mutation updateTask($input:UpdateTasks!){
        updateTask(input:$input){
            status
            message
        }
    }

`;

export const UPDATE_TASK_TYPE = gql `
    mutation markAs($input:MarkAsType!){
        markAs(input:$input){
            status
            message
        }
    }
`;