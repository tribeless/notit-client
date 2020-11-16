import gql from 'graphql-tag';

const SIGNIN_MUTATION = gql`
    mutation signIn($email:String!,$password:String!){
        signIn(email:$email,password:$password){
            status
            id
        }
    }

`;

export default SIGNIN_MUTATION;