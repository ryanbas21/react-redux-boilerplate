import React from 'react'
import store from '../store/store'

const CreateBlog = props =>
<div className='blog-text-container'>
  <form method="post" action='/submitblog'>
  Blog Name : <input type="text" />
  Import File: <input type="file" />
</form>
</div>

module.exports = CreateBlog;
