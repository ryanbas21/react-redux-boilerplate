import React from 'react'
import Picture from './pictures'
import { browserHistory } from 'react-router';
const Home = props =>
<div>
    <div>
       <h1>EPB RESEARCH</h1>
       <button
            type='submit'
            className='button radius'
            onClick={ () => browserHistory.push('/subscribe') }>
            Subscribe</button>
       <Picture />
     </div>
</div>

module.exports = Home;
