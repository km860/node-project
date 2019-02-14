import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from '../../components/Auth/LoginForm'
import * as actions from '../../actions/'

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, errors: {...this.state.errors, [e.target.name]: '' } });
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(user);
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errors: state.errors
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (data) => dispatch(actions.loginUser(data))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
