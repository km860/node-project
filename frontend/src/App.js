
import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import * as actions from './actions'
import store from './store'
import NavBar from './components/NavBar/NavBar'
import Home from './Home'
import Register from './containers/Auth/Register'
import Login from './containers/Auth/Login'

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(actions.setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(actions.logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
    
  }
  handleLogout() {
    store.dispatch(actions.logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }

  render() {
    return (
      <div className="App">
          <NavBar isAuth={this.props.auth.isAuthenticated} signOut={this.handleLogout} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

