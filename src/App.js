import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './views/login';
import Register from './views/register';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
  <Router>
    <Switch>
  <Route path="/" component={Login} exact/>
  <Route path="/register" component={Register} exact/>
  </Switch>
  </Router>
    );
  }
}

export default App;
