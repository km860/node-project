import axios from 'axios'
import jwt_decode from 'jwt-decode';
import * as actionTypes from './actionTypes'
import setAuthToken from '../utils/setAuthToken'

// Register user
export const registerUser = (userData, history) => {
  return dispatch => {
    axios.post('/api/users/register', userData)
        .then(res => {
          console.log(res)
          history.push('/login')
        })
        .catch(err => {
          console.log(err.response.data)
          dispatch({
            type: actionTypes.GET_ERRORS,
            payload: err.response.data
          })
        }) 
  }
}

// Login - Get User Token
export const loginUser = (userData) => {
  return dispatch => {
    axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
  }
}

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => {
  return dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  }
};