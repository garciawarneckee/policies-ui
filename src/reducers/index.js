import { combineReducers } from 'redux';
import policyReducer from './policyReducer';

const rootReducer = combineReducers({ policies: policyReducer });

export default rootReducer;