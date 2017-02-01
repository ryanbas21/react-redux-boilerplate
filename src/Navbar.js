import React from 'react'
import { Link } from 'react-router';

const NavBar = props =>
<nav className='nav-horizontal' role='menubar' >
      <li className='nav-horizontal-item'><Link to='/'> Home </Link></li>
      <li className='nav-horizontal-item'><Link to='/contact'> Contact Us </Link></li>
      <li className='nav-horizontal-item'><Link to='/disclaimer'> Disclaimer </Link></li>
      <li className='nav-horizontal-item'><Link to='/login'> Log-In </Link></li>
      <li className='nav-horizontal-item'><Link to='/signup'> Sign Up </Link></li>
      <li className='nav-horizontal-item'><Link to='/blog'> Blog </Link></li>
      <li className='nav-horizontal-item'><Link to='/subscribe'> Subscribe </Link></li>
</nav>



export default NavBar;
