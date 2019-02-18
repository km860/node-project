import { SET_CURRENT_USER } from "../actions/actionTypes";
import isEmpty from '../validation/isEmpty'
const intialState = {
  isAuthenticated: false,
  user: {}
}

const authReducer = (state = intialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state
  }
}

export default authReducer