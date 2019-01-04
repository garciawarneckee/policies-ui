import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Clients from '../../pages/Clients/Clients';
import Policies from '../../pages/Policies/Policies';
import Home from '../../pages/Home/Home';
import Navbar from '../../components/Navbar/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/policies" component={Policies} />
          <Route path="/clients" component={Clients} />
        </div>
    );
  }
}

export default App;
