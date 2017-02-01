import React from 'react'
import store from '../store/store'

const CreateBlog = props =>{
console.log(props)
const formValue = {}
return (
<div className='blog-text-container'>
  <form method="post" onSubmit={ () => props.submitBlog(formValue)}>
  <label>Blog Name :</label><input value={formValue.value} type="text" /><br />
  <label>Import File:</label><input value={formValue.file} type="file" /><br />
  <button type="submit">Submit</button>
</form>
</div>
)
}

module.exports = CreateBlog;
