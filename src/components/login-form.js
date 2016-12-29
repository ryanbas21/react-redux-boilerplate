import React from 'react'

const LoginForm = props =>
 <form type='submit' onSubmit={props.handleLogin}>
     <label>Username <input type='text' className='log-in' id='username' placeholder='username'/></label>
     <label>Password <input type='password' className='log-in' id='password' placeholder='password'/></label>
     <button type='submit' className='button' onClick={props.handleForm}>Log In</button>
</form>


module.exports = LoginForm;
