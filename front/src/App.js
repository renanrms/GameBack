import {Header} from './components/Header'
import {Menu} from './components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Header projectPath='/my-game'/>
        <Menu projectPath='/my-game'/>
      </Router>
    </>
  );
}

export default App;