import { REQUEST_LOGIN, SUCCESSFUL_LOGIN, FAIL_LOGIN } from '../actions';

function login(state = {}, action) {
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
    default: return state;
  }
}

export default login;