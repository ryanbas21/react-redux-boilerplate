import React from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
const LoginForm = props =>
 <form inline={true} type='submit' onSubmit={props.handleLogin}>
     <Input  required={true} type='text' className='log-in' id='username' label='username' />
     <Input  required={true} type='password' className='log-in' id='password' label='password'/>
     <Button size="large" color="accent"
             variant="fab" type='submit'
             className='button' onClick={props.handleForm}>
             Log In</Button>
</form>



module.exports = LoginForm;
