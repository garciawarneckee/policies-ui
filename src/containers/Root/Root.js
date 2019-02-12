import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import middlewares from '../../middlewares';
import reducers from '../../reducers';
import App from "../App/App";

const store = createStore(reducers, composeWithDevTools(middlewares));



const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

export default Root;