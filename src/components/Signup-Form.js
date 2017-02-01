import React from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
const SignupForm = props =>
        <Form>
          <legend>SignUp</legend>
          Name:     <input label="name"  placeholder="Name"/>
          Email:    <input label="email"  placeholder="Email" />
          Location: <input label="location"  placeholder="Location" />
          <button variant="raised">Submit</button>
        </Form>


module.exports = SignupForm
