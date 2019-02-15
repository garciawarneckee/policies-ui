import { SEARCH_CLIENT_REQUEST, SEARCH_CLIENT_SUCCESFULL, SEARCH_CLIENT_FAIL } from '../actions';

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
        client: action.payload
      }
    }
    case SEARCH_CLIENT_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    }
    default: return state;
  }
}

export default clients;