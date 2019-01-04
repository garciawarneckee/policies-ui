import axios from "axios";

export const REQUEST_POLICIES = "REQUEST_POLICIES";
export const RECEIVE_POLICIES = "RECEIVE_POLICIES";

function requestPolicies() {
  return { type: REQUEST_POLICIES }
}

function receivePolicies(policies) {
  return {
    type: RECEIVE_POLICIES,
    payload: policies
  }
}

export function getPolicies() {
  return async dispatch => {
    dispatch(requestPolicies());
    const response = await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5');
    return dispatch(receivePolicies(response.data.policies));
  }
  
}
