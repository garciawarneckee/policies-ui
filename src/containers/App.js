import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect} from 'react-router-dom';
import Clients from '../pages/Clients/Clients';
import PoliciyList from '../components/policies/PolicyList';
import Home from '../pages/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import LoginForm from '../components/login/Login';

const AppContainer = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
`;

const Container = styled.div`
  display: inherit;
  height: inherit;
  flex-direction: inherit;
`;

class App extends Component {
  render() {
    return (
        <AppContainer>
          <Switch>
            <Route exact path="/(login)" component={LoginRoutes} />
            <Route component={DefaultContainer} />
          </Switch>
        </AppContainer>
    );
  }
}

const LoginRoutes = () => (
  <Container>
    <Route exact path="/" render={() => <Redirect to="/login"/>} />
    <Route path="/login" component={LoginForm} />
  </Container>
);

const DefaultContainer = () => (
  <Container>
    <Navbar />
    <Route path="/home" component={Home} />
    <Route path="/policies" component={PoliciyList} />
    <Route path="/clients" component={Clients} />
  </Container>
);

export default App;
