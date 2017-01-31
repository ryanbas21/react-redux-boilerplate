import React from 'react'
import store from '../store/store'

const CreateBlog = props =>
<div className='blog-text-container'>
  <form method="post" action='/submitblog' onSubmit={props.submitBlog}>
  Blog Name : <input type="text" />
  Import File: <input type="file" />
  <button type="submit" onClick={props.submitBlog}> Submit</button>
</form>
</div>

module.exports = CreateBlog;
