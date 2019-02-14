import React, { Component } from 'react'
/*import { connect } from 'react-redux' */
import axios from 'axios'
import RegisterForm from '../../components/Auth/RegisterForm'
class Register extends Component {
  constructor () {
    super();
    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, errors: {...this.state.errors, [e.target.name]: '' }});
  }
  handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    console.log(newUser)
    
    axios.post('/api/users/register', newUser)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err.response.data)
        this.setState({...this.state, errors: err.response.data})
      })
  }

  render() {
    return (
      <div>
        <RegisterForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          username={this.state.username}
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          password2={this.state.password2}
          errors={this.state.errors}
        />
      </div>
    )
  }
}

/* const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Register) */
export default Register
