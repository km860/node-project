import { GET_ERRORS } from "../actions/actionTypes";

const intialState = {
  
}

const errorReducer = (state = intialState, action) => {
  switch(action.type) {
    case GET_ERRORS: 
      return action.payload
    default:
      return state
  }
}

export default errorReducer