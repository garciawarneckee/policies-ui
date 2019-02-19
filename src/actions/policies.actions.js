import axios from 'axios';
import history from '../middlewares/history';
import { withSecurityHeaders } from '../middlewares/axios-headers-helper';

export const REQUEST_POLICIES = 'REQUEST_POLICIES';
export const RECEIVE_POLICIES = 'RECEIVE_POLICIES';
export const FAILED_POLICIES = 'FAILED_POLICIES';
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

function failedPolicies(error) {
  return {
    type: FAILED_POLICIES,
    payload: error
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
    try {
      const headers = withSecurityHeaders();
      const clientResponse = await axios.get('/auth/me', { headers: headers });
      const client = clientResponse.data.client;
      const response = await axios.get(`/policies?name=${client.name}&offset=${offset}&quantity=${quantity}`, { headers: headers });
      return dispatch(receivePolicies(response.data));
    } catch (error) {
      switch (error.response.status) {
        case 403: history.push('/forbidden'); break;
        default: dispatch(failedPolicies(error.response.data.message));
      }
    }
  }
}

export function cleanPolicies() {
  return async dispatch => { dispatch(flushPolicies()) }
}

