import React from 'react'
import { Link } from 'react-router';

const NavBar = props =>
<nav className='' id='myTopnav' role='menubar' >
      <li type='horizontal'><Link to='/'> Home </Link></li>
      <li type='horizontal'><Link to='/contact'> Contact Us </Link></li>
      <li type='horizontal'><Link to='/disclaimer'> Disclaimer </Link></li>
      <li type='horizontal'><Link to='/login'> Log-In </Link></li>
      <li type='horizontal'><Link to='/signup'> Sign Up </Link></li>
      <li type='horizontal'><Link to='/blog' > Blog </Link></li>
      <li type='horizontal'><Link to='/subscribe'> Subscribe </Link></li>
</nav>


export default NavBar;
