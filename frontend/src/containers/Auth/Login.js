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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.getProfile()
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }
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


const mapDispatchToProps = dispatch => {
  return {
    loginUser: (data) => dispatch(actions.loginUser(data)),
    getProfile: () => dispatch(actions.getCurrentProfile())
  }
  
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
