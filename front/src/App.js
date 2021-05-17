import React from 'react';
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import * as urls from './constants/Urls';
import { isAuthenticated } from './api/auth';


const NavRoute = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <Nav/>
      <Component {...props}/>
    </div>
  )}/>
)

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