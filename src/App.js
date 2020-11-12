import React,{useState}  from 'react';
import Main from './Containers/Pages/Main';
import SignUp from './Containers/LandingPage/SignUp';
import NotFound from './Containers/Pages/NotFound';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    data: {}
  });
  return (
    <Router>
    {/* <Main /> */}
     <Switch>
            <Route path="/sign-up">
                <SignUp formData={formData} setFormData={setFormData}/>
            </Route>
            <Route path="/sign-in" component="" />
            <Route path='/404' component={NotFound} />
            <Redirect from="*" to="/404" />
        </Switch>
    </Router>
  );
}

export default App;
