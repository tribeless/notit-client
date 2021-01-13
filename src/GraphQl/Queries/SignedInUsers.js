import gql from "graphql-tag";

export const GET_USERS = gql `
    query{
        usersDetails {
            email
            firstName
            lastName
            filePath
        }
    }
`;