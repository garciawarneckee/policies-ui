import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import policyReducer from './policy.reducer';

const rootReducer = combineReducers({ login: loginReducer, policies: policyReducer });

export default rootReducer;