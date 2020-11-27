const errors = (error) => {
     error.graphQLErrors.map(({message}) => {return message})
}

const reducedError=(message)=>{
   return message;
}
export default errors;