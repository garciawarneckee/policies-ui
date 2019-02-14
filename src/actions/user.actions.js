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
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch(successUserData(user));
    } catch(error) {
      dispatch(failedUserData(error));
    }
  }
}