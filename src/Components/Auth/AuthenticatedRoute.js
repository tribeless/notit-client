import {useState} from "react";
import {Route,withRouter,Redirect} from "react-router-dom";
import {useApolloClient} from "@apollo/react-hooks";
import PropTypes from "prop-types";
import {LoadingOutlined} from "@ant-design/icons";
import {useQuery} from "@apollo/react-hooks";
import {GET_USERS} from "../../GraphQl/Queries/SignedInUsers";

const AuthenticatedRoute = ({
        component:Component,
        path,
        ...rest
    })=>{
    const [error,setError] = useState({message:"",open:false});
    const client = useApolloClient();
    const {loading,data} = useQuery(GET_USERS);
    const redirectToLoginPage = ()=>{
        client.resetStore();
        return <Redirect to="/sign-in"/>
    }
    return (

        <Route 
            path={path}
            {...rest}
            render={props =>(
                loading ? (<LoadingOutlined  style={{position:"absolute",left:"50vw",top:"30vh",fontSize:"2rem",color:"black"}}/>):
                 data ?
                    (<Component 
                        data={data}
                        errorMessage={error}
                        setError={setError}
                        error={error} 
                        {...props}
                    />)
                    :(redirectToLoginPage())
            )}
        />
    )
}

AuthenticatedRoute.propTypes = {
    component:PropTypes.any.isRequired,

}
export default withRouter(AuthenticatedRoute);