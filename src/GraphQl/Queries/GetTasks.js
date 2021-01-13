import gql from 'graphql-tag';

export const GET_TASKS = gql`
    query usersTasks{
        usersTasks{
            message
            id
            taskType
            updatedAt
        }
    }
`;

