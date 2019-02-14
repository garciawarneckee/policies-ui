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
    const client = JSON.parse(localStorage.getItem('user'));
    const clientName = client.name;
    const response = await axios.get(`/policies?name=${clientName}&offset=0&quantity=10`);
    return dispatch(receivePolicies(response.data.content));
  }
}

