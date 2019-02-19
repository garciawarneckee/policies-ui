import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import policyReducer from './policies.reducer';
import clientsReducer from './clients.reducer';
import userReducer from './users.reducer';

const rootReducer = combineReducers({ 
  auth: authReducer, 
  policies: policyReducer, 
  user: userReducer, 
  clients: clientsReducer 
});

export default rootReducer;