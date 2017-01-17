import React from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';
const LoginForm = props => (
<Container>
<form type='submit' onSubmit={props.handleLogin}>
  <legend>Title</legend>
  <div className="mui-textfield">
    <input type="text" required />
    <label>Required Text Field</label>
  </div>
  <div className="mui-textfield mui-textfield--float-label">
    <input type="email" required />
    <label>Required Email Address</label>
  </div>
  <div className="mui-textfield mui-textfield--float-label">
    <textarea ></textarea>
    <label>Required Textarea</label>
  </div>
  <div className="mui-textfield mui-textfield--float-label">
    <input type="email" value="Validation error" />
    <label>Email Address</label>
  </div>
  <button type="submit" className="mui-btn mui-btn--raised">Submit</button>
 </form>
</Container>
)
module.exports = LoginForm;
