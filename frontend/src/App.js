
import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './components/NavBar/NavBar'
import Register from './containers/Auth/Register'
import Login from './containers/Auth/Login'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAuth: true
    }
    
  }

  render() {
    return (
      <div className="App">
          <NavBar isAuth={this.state.isAuth} />
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

