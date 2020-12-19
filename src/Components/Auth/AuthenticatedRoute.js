import {useState} from "react";
import {Route,withRouter,Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {Spin} from "antd";
import {useQuery} from "@apollo/react-hooks";
import {GET_USERS} from "../../GraphQl/Queries/GetTasks";

const AuthenticatedRoute = ({
        component:Component,
        path,
        ...rest
    })=>{
    const [error,setError] = useState({message:"",open:false});
    const {loading,data} = useQuery(GET_USERS);
    return (

        <Route 
            path={path}
            {...rest}
            render={props =>(
                loading ? (<Spin />):
                 data ?
                    (<Component 
                        data={data}
                        errorMessage={error}
                        setError={setError}
                        {...props}
                    />)
                    :(<Redirect 
                        to="/sign-in"
                    />)
            )}
        />
    )
}

AuthenticatedRoute.propTypes = {
    component:PropTypes.any.isRequired,

}
export default withRouter(AuthenticatedRoute);