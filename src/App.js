import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
