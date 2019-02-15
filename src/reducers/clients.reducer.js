import { 
  SEARCH_CLIENT_REQUEST, 
  SEARCH_CLIENT_SUCCESFULL, 
  SEARCH_CLIENT_FAIL, 
  FLUSH_CLIENT } from '../actions';

function clients(state = { client: {} }, action) {
  switch(action.type) {
    case SEARCH_CLIENT_REQUEST: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case SEARCH_CLIENT_SUCCESFULL: {
      return {
        ...state,
        isFetching: false,
        hasError: false,
        client: action.payload
      }
    }
    case SEARCH_CLIENT_FAIL: {
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: action.payload
      }
    }
    case FLUSH_CLIENT: {
      return {
        ...state,
        client: {}
      }
    }
    default: return state;
  }
}

export default clients;