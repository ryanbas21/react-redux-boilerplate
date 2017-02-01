import React from 'react'

const LoginForm = props =>
<form type='submit' onSubmit={props.handleLogin}>
  <legend className='log-in-header'>Log In</legend>
  <div className="">
    <input type="email" required />
    <label>Email Address</label>
  </div>
  <div className="">
    <input type="password" required />
    <label>Password</label>
  </div>
  <button type="submit" className="">Submit</button>
</form>

module.exports = LoginForm;
