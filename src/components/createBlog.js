import React from 'react'
import store from '../store/store'

const CreateBlog = props =>{
console.log(props)
const formValue = {}
return (
<div className='blog-text-container'>
  <form method="post" onSubmit={ () => props.submitBlog(formValue)}>
  Blog Name : <input value={formValue.value} type="text" />
  Import File: <input value={formValue.file} type="file" />
  <button type="submit">Submit</button>
</form>
</div>
)
}

module.exports = CreateBlog;
