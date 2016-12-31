import React from 'react'

const CreateBlog = props =>
<div>
  <textarea wrap='soft' required='required' ref={ input => store.blogText = input }> </textarea>
  <button type='submit' onClick={props.submitBlog}>Submit</button>
</div>

module.exports = CreateBlog;
