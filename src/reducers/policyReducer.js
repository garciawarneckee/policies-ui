import { REQUEST_POLICIES, RECEIVE_POLICIES } from '../actions/actionTypes';

function policies(state = { policies: [] }, action) {
  switch(action.type) {
    case REQUEST_POLICIES: {
      return {
        ...state,
        isFetching: true
      }
    }
    case RECEIVE_POLICIES: {
      return {
        ...state,
        isFetching: false,
        policies: action.payload
      }
    }
    default: return state;
  }
}

export default policies;