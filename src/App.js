import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Loading from './components/Loading';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const checkPath = window.location.pathname == '/' ? <Loading /> : '';
  return (
    <Router>
      <div>
        {checkPath}
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
