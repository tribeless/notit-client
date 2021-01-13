import gql from "graphql-tag";

export const OPEN_FORM = gql`

    query{
        openForm @client
        taskType @client
        authorId @client
    }
`;
