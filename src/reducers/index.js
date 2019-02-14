import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import policyReducer from './policy.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({ login: loginReducer, policies: policyReducer, user: userReducer });

export default rootReducer;