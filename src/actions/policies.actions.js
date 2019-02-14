import axios from 'axios';

export const REQUEST_POLICIES = 'REQUEST_POLICIES';
export const RECEIVE_POLICIES = 'RECEIVE_POLICIES';
export const FLUSH_POLICIES = 'FLUSH_POLICIES';

function requestPolicies() {
  return { type: REQUEST_POLICIES }
}

function receivePolicies(policies) {
  return {
    type: RECEIVE_POLICIES,
    payload: policies
  }
}

function flushPolicies() {
  return {
    type: FLUSH_POLICIES
  }
}

export function getPolicies(offset, quantity) {
  return async dispatch => {
    dispatch(requestPolicies());
    const client = JSON.parse(localStorage.getItem('user'));
    const clientName = client.name;
    const response = await axios.get(`/policies?name=${clientName}&offset=${offset}&quantity=${quantity}`);
    return dispatch(receivePolicies(response.data));
  }
}

export function cleanPolicies() {
  return async dispatch => { dispatch(flushPolicies()) }
}

