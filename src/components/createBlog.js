import React from 'react'
import store from '../store/store'

const CreateBlog = props =>
<div className='blog-text-container'>
  <textarea wrap='soft' className='write-blog' required='required' placeholder='Write your post here'></textarea>
  <button type='submit' onClick={props.submitBlog}>Submit</button>
</div>

export default CreateBlog;
