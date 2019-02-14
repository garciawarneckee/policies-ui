import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';

import styled from 'styled-components';
import { PrimaryButton } from '../common/Buttons';
import { Input, Label } from '../common/Form';
import loginLogo from '../../login-image.png';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(form) {
    form.preventDefault();
    const username = form.target[0].value;
    const password = form.target[1].value;
    this.props.login(username, password);
  }

  render() {
    const errorMessage = (this.props.failedLogin) ? <ErrorMessage>{ this.props.message }</ErrorMessage> : '';
    return( 
      <LoginContainer onSubmit={this.onSubmit}> 
        <LoginLogo alt="login image" src={loginLogo} />
        <LoginTitle>Welcome to Policies App!</LoginTitle>
        <LoginSubtitle>Please enter your credentials to start using the app </LoginSubtitle>
        <InputGroup>
          <Label>Username</Label>
          <Input name="username" type="text" />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input name="password" type="password" />
        </InputGroup>
        { errorMessage }
        <LoginButton type="submit">Login</LoginButton>
      </LoginContainer>    
    )
  }

}

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged,
    failedLogin: state.auth.failedLogin,
    message: state.auth.message
});

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const LoginContainer = styled.form`
  display: inherit;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 1em;
  border: 1px #EEEEEE solid;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 10px 0px;
`;

const InputGroup = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: center;
  margin: .5em 0em;
`;

const LoginButton = styled(PrimaryButton)`
  margin-top: 1em;
`;

const LoginLogo = styled.img`
  width: 150px;
  align-self: center;
`;

const LoginTitle = styled.h2`
  margin: auto;
  padding-bottom: .5em;
  padding-top: .5em;
`;

const LoginSubtitle = styled.h3`
  font-weight: normal;
  padding: auto;
  margin-top: 0em;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
`;

const ErrorMessage = styled.p`
  color: #C0392B;
  text-align: center;
  font-weight: bold;
`