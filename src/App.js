import './App.css';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import { useState } from 'react';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute authenticated={isLogin} component={Home} path="/" />
      </Switch>
    </div>
  );
}

export default App;
