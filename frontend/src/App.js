
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'

import NavBar from './components/NavBar/NavBar'
import RegisterForm from './components/Auth/RegisterForm'
import Register from './containers/Auth/Register'
import Login from './containers/Auth/Login'
import LoginForm from './components/Auth/LoginForm'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={Register} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
