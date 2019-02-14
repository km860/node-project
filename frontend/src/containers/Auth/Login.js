import React, { Component } from 'react'
/* import PropTypes from 'prop-types'
import { connect } from 'react-redux' */
import LoginForm from '../../components/Auth/LoginForm'

class Login extends Component {
  /* static propTypes = {
    prop: PropTypes
  } */
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(user)
  }

  render() {
    return (
      <div>
        <LoginForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          email={this.state.email}
          password={this.state.password}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login) */

export default Login