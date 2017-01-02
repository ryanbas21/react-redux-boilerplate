import React from 'react'
import { store } from '../store/store'

const CreateBlog = props =>
<div>
  <textarea wrap='soft' required='required' ref={ input => store.blogText = input }> </textarea>
  <button type='submit' onClick={props.submitBlog}>Submit</button>
</div>

module.exports = CreateBlog;
