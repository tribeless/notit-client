import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql
`
    mutation signUp($input:UserData!){
        signUp(input:$input){
            token
            status
            id
        }
    }
`;