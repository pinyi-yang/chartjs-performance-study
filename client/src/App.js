import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import  { BasicChart } from "./components/BasicChart"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/basic" component={BasicChart}/>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
