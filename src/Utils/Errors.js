const graphQlErrors = (error) => {

   return (
      error.graphQLErrors.map(({
         message
      }) => {
         return message;
      }))
}
export default graphQlErrors;