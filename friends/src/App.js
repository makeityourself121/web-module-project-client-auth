import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'
import Logout from './components/Logout'
import FriendsList from './components/FriendsList'

import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
    <div className="App">
    <ul>
         
            <Link to="/login">Login</Link>
          
         
            <Link to="/logout">Logout</Link>
          
            {/* {localStorage.getItem("token") && <div>
              <Link to="/friends">Friend List</Link>
            </div>
            } */}
        </ul>

        <Switch>
          <PrivateRoute exact path='/friends' component={FriendsList}/>
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />

        </Switch>
    </div>
    </Router>
  );
}

export default App;
