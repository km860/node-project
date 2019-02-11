
import React, { Component } from 'react';
import axios from 'axios'

import NavBar from './components/NavBar/NavBar'
import RegisterForm from './components/Auth/RegisterForm'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleClick(event) {
    axios({
      method: 'post',
      url: '/users',
      data: {
        username: 'Fred',
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        /* 'Access-Control-Allow-Origin': '*' */
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>add</button>
        <RegisterForm />
      </div>
    );
  }
}

export default App;
