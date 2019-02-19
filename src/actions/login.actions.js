import axios from 'axios';
import history from '../middlewares/history';
import { withSecurityHeaders } from '../middlewares/axios-headers-helper';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESSFUL_LOGIN = 'SUCCESSFUL_LOGIN';
export const FAIL_LOGIN = 'FAIL_LOGIN';

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const SUCCESSFUL_LOGOUT = 'SUCCESSFUL_LOGOUT';
export const FAIL_LOGOUT = 'FAIL_LOGOUT';

function requestLogin(username) {
  return {
    type: REQUEST_LOGIN,
    payload: { username: username }
  }
}

function successfulLogin(user) {
  return {
    type: SUCCESSFUL_LOGIN,
    payload: user
  }
}

function failedLogin(error) {
  return {
    type: FAIL_LOGIN,
    payload: error
  }
}

function requestLogout() {
  return {
    type: REQUEST_LOGOUT
  }
}

function successfulLogout() {
  return {
    type: SUCCESSFUL_LOGOUT
  }
}

function failedLogout(error) {
  return {
    type: FAIL_LOGOUT,
    payload: error
  }
}


export function login(username, password) {
  return async dispatch => {
    dispatch(requestLogin(username));
    try {
      const headers = withSecurityHeaders();
      const credentials = { username: username, password: password };
      const response = await axios.post("/auth/login", credentials, { headers: headers });
      const token = response.data.token;
      dispatch(successfulLogin(token));
      localStorage.setItem('authToken', token);
      history.push(`/home`);
    } catch(error) {
      dispatch(failedLogin(error.response.data.message));
    }
  }
}

export function logout() {
  return async dispatch => {
    dispatch(requestLogout());
    try {
      const headers = withSecurityHeaders();
      await axios.post("/auth/logout", null, { headers: headers });
      dispatch(successfulLogout());
      localStorage.removeItem('authToken');
      history.push(`/login`);
    } catch(error) {
      dispatch(failedLogout(error.response.data.message));
    }
  }
}