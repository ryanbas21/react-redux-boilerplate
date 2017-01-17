import React from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';
const LoginForm = props => (
<Container className='login-container-width'>
<form type='submit' onSubmit={props.handleLogin}>
  <legend className='log-in-header'>Log In</legend>
  <div className="mui-textfield mui-textfield--float-label">
    <input type="email" required />
    <label>Email Address</label>
  </div>
  <div className="mui-textfield mui-textfield--float-label">
    <input type="password" required />
    <label>Password</label>
  </div>
  <button type="submit" className="mui-btn mui-btn--raised login-button">Submit</button>
 </form>
</Container>
)
module.exports = LoginForm;
