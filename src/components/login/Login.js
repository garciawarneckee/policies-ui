import React, { Component } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../common/Buttons';
import { Input, Label } from '../common/Form';
import loginLogo from '../../login-image.png';

export default class LoginForm extends Component {

  render() {
    return( 
      <LoginContainer> 
        <LoginLogo alt="login image" src={loginLogo} />
        <LoginTitle>Welcome to Polices App!</LoginTitle>
        <LoginSubtitle>Please enter your credentials to start using the app </LoginSubtitle>
        <InputGroup>
          <Label for="username">Username</Label>
          <Input name="username" type="text" />
        </InputGroup>
        <InputGroup>
          <Label for="password">Password</Label>
          <Input name="password" type="password" />
        </InputGroup>
        <LoginButton type="submit">Login</LoginButton>
      </LoginContainer>    
    )
  }

}

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