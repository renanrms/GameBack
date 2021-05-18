import React from 'react';
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as urls from './constants/Urls';
import { isAuthenticated } from './api/auth';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: urls.SIGNIN, state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={urls.HOME} component={Signin} exact={true}/>
          <Route path={urls.SIGNIN} component={Signin} exact={true}/>
          <PrivateRoute auth={true} path={urls.DASHBOARD} component={Dashboard} exact={true}/>
          <PrivateRoute path={urls.PROFILE} component={Profile} exact={true}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;