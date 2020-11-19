const graphQlError = (error) => {
     error.graphQLErrors.map(({message}) => {
        return message;
     })     
}

export default graphQlError;