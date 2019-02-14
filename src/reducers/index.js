import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import policyReducer from './policy.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({ auth: authReducer, policies: policyReducer, user: userReducer });

export default rootReducer;