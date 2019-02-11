import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Clients from '../../pages/Clients/Clients';
import PoliciyList from '../../components/policies/PolicyList';
import Home from '../../pages/Home/Home';
import Navbar from '../../components/Navbar/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/policies" component={PoliciyList} />
          <Route path="/clients" component={Clients} />
        </div>
    );
  }
}

export default App;
