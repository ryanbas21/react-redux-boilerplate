import React from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
const SignupForm = props =>
        <Form>
          <legend>SignUp</legend>
          Name:<Input label="name" floatingLabel={true} defaultValue="Name"/>
          Email:<Input label="email" floatingLabel={true} defaultValue="Email" />
          <Textarea label="location" floatingLabel={true} defaultValue="Location" />
          <Button variant="raised">Submit</Button>
        </Form>


module.exports = SignupForm
