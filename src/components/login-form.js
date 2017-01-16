import React from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';
const LoginForm = props =>
<Container fluid={true}>
 <form type='submit' onSubmit={props.handleLogin}>
      <Row>
           <Col md="12"><Input  floatingLabel={true} required={true} type='text'
                className='log-in' id='username' label='username' /></Col></Row>
     <Row><Col md="12"><Input  floatingLabel={true} required={true} type='password' className='log-in'
          id='password' label='password'/></Col></Row>
     {/* <Row><Button size="small" color="accent"
             variant="fab" type='submit'
             className='login-button' onClick={props.handleForm}>
             <p className='login-text'>Login</p></Button></Row> */}
        </form>
</Container>



module.exports = LoginForm;
