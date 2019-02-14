import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect} from 'react-router-dom';
import Clients from '../pages/Clients/Clients';
import PoliciyList from '../components/policies/PolicyList';
import Home from '../pages/Home/Home';
import Navbar from '../components/navbar/Navbar';
import LoginForm from '../components/login/Login';
import { PrivateRoute } from '../components/common/PrivateRoute';

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
            <Route component={AppRoutes} />
          </Switch>
        </AppContainer>
    );
  }
}

const LoginRoutes = () => (
  <Container>
    <Route exact path="/" render={ () => <Redirect to="/login"/> } />
    <Route path="/login" component={LoginForm} />
  </Container>
);

const AppRoutes = () => (
  <Container>
    <Navbar />
    <PrivateRoute path="/home" component={Home} />
    <PrivateRoute path="/policies" component={PoliciyList} />
    <PrivateRoute path="/clients" component={Clients} />
  </Container>
);

export default App;
