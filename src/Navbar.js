import React from 'react'
import { Link } from 'react-router';


const NavBar = props =>
<nav className="breadcrumbs" role='menubar' ariaLabel="breadcrumbs">
  <ul className='no-bullet'>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='/contact'> Contact Us </Link></li>
      <li><Link to='/disclaimer'> Disclaimer </Link></li>
      <li><Link to='/login'> Log-In </Link></li>
      <li><Link to='/signup'> Sign Up </Link></li>
      <li><Link to='/blog' > Blog </Link> </li>
      <li><Link to='/subscribe'> Subscribe </Link></li>
  </ul>
</nav>

export default NavBar;
