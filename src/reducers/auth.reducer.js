import { 
  REQUEST_LOGIN, 
  SUCCESSFUL_LOGIN, 
  FAIL_LOGIN, 
  REQUEST_LOGOUT, 
  SUCCESSFUL_LOGOUT, 
  FAIL_LOGOUT } from '../actions';

function auth(state = {}, action) {
  switch(action.type) {
    case REQUEST_LOGIN: {
      return {
        ...state,
        isLogged: false
      }
    }
    case SUCCESSFUL_LOGIN: {
      return {
        ...state,
        isLogged: true,
        client: action.payload.client
      }
    }
    case FAIL_LOGIN: {
      return {
        ...state,
        isLogged: false,
        failedLogin: true,
        message: 'The provided credentials are wrong. Please try again'
      }
    }
    case REQUEST_LOGOUT: {
      return {
        ...state,
      }
    }
    case SUCCESSFUL_LOGOUT: {
      return {
        ...state,
        isLogged: false
      }
    }
    case FAIL_LOGOUT: {
      return {
        ...state
      }
    }
    default: return state;
  }
}

export default auth;