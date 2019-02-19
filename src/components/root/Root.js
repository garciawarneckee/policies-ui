import React from 'react';
import {  Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import history from '../../middlewares/history';
import middlewares from '../../middlewares';
import reducers from '../../reducers';

import App from './App';

const store = createStore(reducers, composeWithDevTools(middlewares));

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

export default Root;