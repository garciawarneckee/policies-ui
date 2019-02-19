import axios from 'axios';
import history from '../middlewares/history';
import { withSecurityHeaders } from '../middlewares/axios-headers-helper';

export const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
export const SUCCESSFUL_USER_DATA = 'SUCCESSFUL_USER_DATA';
export const FAIL_USER_DATA = 'FAIL_USER_DATA';

function requestUserData() {
  return {
    type: REQUEST_USER_DATA
  }
}

function successUserData(user) {
  return {
    type: SUCCESSFUL_USER_DATA,
    payload: user
  }
}

function failedUserData(error) {
  return {
    type: FAIL_USER_DATA,
    payload: error
  }
}

export function getloggedUserData() {
  return async dispatch => {
    dispatch(requestUserData());
    try {
      const headers = withSecurityHeaders();
      const userResponse = await axios.get('/auth/me', { headers: headers });
      const user = userResponse.data;
      dispatch(successUserData(user));
    } catch(error) {
      if(error.response.status === 401) { history.push('/login'); }
      dispatch(failedUserData(error));
    }
  }
}