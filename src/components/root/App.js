import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect} from 'react-router-dom';
import Clients from '../clients/Clients';
import PoliciyList from '../policies/PolicyList';
import Home from '../home/Home';
import Navbar from '../navbar/Navbar';
import LoginForm from '../login/Login';
import { PrivateRoute } from '../common/PrivateRoute';

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
    <PrivateRoute path="/(home)" component={Home} />
    <PrivateRoute path="/policies" component={PoliciyList} />
    <PrivateRoute path="/clients" component={Clients} />
  </Container>
);

export default App;

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
