import React,{useState}  from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import SignUp from './Containers/LandingPage/SignUp';
import NotFound from './Containers/Pages/NotFound';
import Dashboard from "./Containers/Pages/Dashboard";
import SignInPage from "./Containers/Pages/SignIn";
import AuthenticatedRoute from "./Components/Auth/AuthenticatedRoute";

function App() {
  const [formData, setFormData] = useState({
    data: {}
  });

  const [error,setError] = useState({message:"",open:false});

  return (
    <Router>
     <Switch>
            <AuthenticatedRoute exact path="/" component={Dashboard} />
            <Route exact path="/sign-up">
                <SignUp formData={formData} setFormData={setFormData}/>
            </Route>
            <Route exact path="/sign-in" >
              <SignInPage errorMessage={error} setError={setError} />
            </Route>
            <Route path='/404' component={NotFound} />
            <Redirect from="*" to="/404" />
        </Switch>
    </Router>
  );
}

export default App;
