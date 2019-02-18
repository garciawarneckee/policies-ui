import customAxios from '../middlewares/custom-axios';

export const SEARCH_CLIENT_REQUEST = 'SEARCH_CLIENT_REQUEST';
export const SEARCH_CLIENT_SUCCESFULL = 'SEARCH_CLIENT_SUCCESFULL';
export const SEARCH_CLIENT_FAIL = 'SEARCH_CLIENT_FAIL';
export const FLUSH_CLIENT = 'FLUSH_CLIENT';

function searchClientRequest(criteria) {
  return { 
    type: SEARCH_CLIENT_REQUEST,
    payload: criteria
  }
}

function searchClientSuccess(client) {
  return { 
    type: SEARCH_CLIENT_SUCCESFULL,
    payload: client
  }
}

function searchClientFail(error) {
  return { 
    type: SEARCH_CLIENT_FAIL,
    payload: error
  }
}

function flushClient() {
  return {
    type: FLUSH_CLIENT
  }
}

export function searchClient(criteria) {
  return async dispatch => {
    dispatch(searchClientRequest(criteria));
    try {
      const response = await customAxios.get(`/clients/search?criteria=${criteria}`);
      const client = response.data.client;
      dispatch(searchClientSuccess(client));
    } catch(error) {
      dispatch(searchClientFail(error.response.data));
    }
  }
}

export function cleanClient() {
  return async dispatch => { dispatch(flushClient()) }
}