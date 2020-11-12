import React,{useState}  from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Main from './Containers/Pages/Main';
import SignUp from './Containers/LandingPage/SignUp';
import NotFound from './Containers/Pages/NotFound';
import Dashboard from "./Containers/Pages/Dashboard";

function App() {
  const [formData, setFormData] = useState({
    data: {}
  });
  return (
    <Router>
    {/* <Main /> */}
     <Switch>
            <Route exact path="/sign-up">
                <SignUp formData={formData} setFormData={setFormData}/>
            </Route>
            <Route exact path="/sign-in" component="" />
            <Route exact path="/dashboard" >
              <Dashboard />
            </Route>
            <Route path='/404' component={NotFound} />
            <Redirect from="*" to="/404" />
        </Switch>
    </Router>
  );
}

export default App;
