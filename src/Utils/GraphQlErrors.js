import {useHistory} from "react-router-dom";
import deleteCookie from "./deleteCookie";


const GraphQlErrors = ({error})=>{
    const history = useHistory();
    
    return (
        error.graphQLErrors.map(({message})=>{
            if(message==="Please signIn") 
            {
                deleteCookie("signedin")
                history.push("/sign-in");
                
            }
            else{
                return <h1 key={message}>{message}</h1>
            }
               
        }))
}
export default GraphQlErrors;
