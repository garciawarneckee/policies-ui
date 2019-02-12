import axios from 'axios';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESSFUL_LOGIN = 'SUCCESSFUL_LOGIN';
export const FAIL_LOGIN = 'FAIL_LOGIN';

function requestLogin(username) {
  return {
    type: REQUEST_LOGIN,
    payload: { username: username }
  }
}

function successfulLogin(response) {
  return {
    type: SUCCESSFUL_LOGIN,
    payload: response.data
  }
}

function failedLogin(error) {
  return {
    type: FAIL_LOGIN,
    payload: error
  }
}

export function login(username, password) {
  return async dispatch => {
    dispatch(requestLogin(username));
    try {
      const credentials = { username: username, password: password };
      const response = await axios.post("/auth/login", credentials);
      dispatch(successfulLogin(response));
    } catch(error) {
      dispatch(failedLogin(error.response.data.message));
    }
  }
}