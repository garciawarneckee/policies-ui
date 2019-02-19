import { REQUEST_USER_DATA, SUCCESSFUL_USER_DATA, FAIL_USER_DATA } from '../actions';

function user(state = { user: {} }, action) {
  switch(action.type) {
    case REQUEST_USER_DATA: {
      return {
        ...state,
      }
    }
    case SUCCESSFUL_USER_DATA: {
      return {
        ...state,
        isFetching: false,
        user: action.payload.client
      }
    }
    case FAIL_USER_DATA: {
      return {
        ...state,
        error: action.payload
      }
    }
    default: return state;
  }
}

export default user;