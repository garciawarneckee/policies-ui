import { REQUEST_POLICIES, RECEIVE_POLICIES } from '../actions';

function policies(state = { policies: [] }, action) {
  switch(action.type) {
    case REQUEST_POLICIES: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case RECEIVE_POLICIES: {
      const newPolicies = [...state.policies, ...action.payload.content];
      return {
        ...state,
        isFetching: false,
        policies: newPolicies,
        total: action.payload.total,
        pageSize: action.payload.quantity,
        elementsInPage: action.payload.elementsInPage,
        startIndex: action.payload.offset
      }
    }
    default: return state;
  }
}

export default policies;