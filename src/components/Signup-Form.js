import React from 'react'
const SignupForm = props =>
        <form>
          <legend>SignUp</legend>
          Name:     <input label="name"  placeholder="Name"/>
          Email:    <input label="email"  placeholder="Email" />
          Location: <input label="location"  placeholder="Location" />
          <button variant="raised">Submit</button>
        </form>


module.exports = SignupForm
