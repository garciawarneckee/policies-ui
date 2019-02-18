import customAxios from '../middlewares/custom-axios';

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
    const clientResponse = await customAxios.get('/auth/me');
    const client = clientResponse.data.client;
    const response = await customAxios.get(`/policies?name=${client.name}&offset=${offset}&quantity=${quantity}`);
    return dispatch(receivePolicies(response.data));
  }
}

export function cleanPolicies() {
  return async dispatch => { dispatch(flushPolicies()) }
}

