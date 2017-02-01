import React from 'react'

const LoginForm = props =>
<form type='submit' onSubmit={props.handleLogin}>
  <legend>Log In</legend>
  <div >
    <input type="email" required />
    <label>Email Address</label>
  </div>
  <div>
    <input type="password" required />
    <label>Password</label>
  </div>
  <button type="submit">Submit</button>
</form>

module.exports = LoginForm;
