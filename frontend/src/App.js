
import React, { Component } from 'react';
import NavBar from './components/NavBar/navbar'
import axios from 'axios'
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
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }
}

export default App;
