import React from 'react'
import { browserHistory } from 'react-router';
const Blog = props =>
<div>
  <button onClick={() => browserHistory.push('/blog/createblog')} type="submit">Write Blog Post</button>
</div>

export default Blog;
