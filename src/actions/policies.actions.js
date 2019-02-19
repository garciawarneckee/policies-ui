import axios from 'axios';
import { withSecurityHeaders } from '../middlewares/axios-headers-helper';

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
    const headers = withSecurityHeaders();
    const clientResponse = await axios.get('/auth/me', { headers: headers });
    const client = clientResponse.data.client;
    const response = await axios.get(`/policies?name=${client.name}&offset=${offset}&quantity=${quantity}`, { headers: headers });
    return dispatch(receivePolicies(response.data));
  }
}

export function cleanPolicies() {
  return async dispatch => { dispatch(flushPolicies()) }
}

