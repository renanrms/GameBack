import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as urls from './constants/Urls';

const NavRoute = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <Nav/>
      <Component {...props}/>
    </div>
  )}/>
)


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={urls.HOME} component={Signin} exact={true}/>
          <Route path={urls.SIGNIN} component={Signin} exact={true}/>
          <Route path={urls.DASHBOARD} component={Dashboard} exact={true}/>
          <Route path={urls.PROFILE} component={Profile} exact={true}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;