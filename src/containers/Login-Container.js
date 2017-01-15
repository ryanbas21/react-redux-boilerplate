import React from 'react';
import LoginForm from '../components/login-form'
import Container from 'muicss/lib/react/container';

const LoginContainer = props =>
<div className='login-container'>
  <Container fluid={true}>
    <LoginForm />
  </Container>
</div>

module.exports = LoginContainer;
