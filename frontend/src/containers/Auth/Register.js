import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import * as actions from '../../actions/'
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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
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
    this.props.registerUser(newUser, this.props.history)
    /* */
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (data, history) => dispatch(actions.registerUser(data, history))
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
//export default Register
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register))
