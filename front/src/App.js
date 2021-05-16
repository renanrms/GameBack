import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
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
          <Route path={urls.SIGNIN}>
            <Signin />
          </Route>
          <Route path={urls.DASHBOARD} component={Dashboard}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;