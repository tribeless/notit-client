import gql from 'graphql-tag';

export const GET_TASKS = gql`
    query usersTasks($taskType:TaskType!){
        usersTasks(taskType:$taskType){
            message
            id
        }
    }
`;