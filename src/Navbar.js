import React from 'react'
import { Link } from 'inferno-router';
import Contact from './containers/Contact';
import Login from './containers/Login-Container';
import SignUp from './containers/Signup';
import Subscribe from './containers/Subscribe';
import Disclaimer from './containers/Disclaimer-Container';

const NavBar = props =>
<nav className="breadcrumbs" role='menubar' ariaLabel="breadcrumbs">
  <ul className='no-bullet'>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='/contact'> Contact Us </Link></li>
      <li><Link to='/disclaimer'> Disclaimer </Link></li>
      <li><Link to='/login'> Log-In </Link></li>
      <li><Link to='/signup'> Sign Up </Link></li>
      <li><Link to='/subscribe'> Subscribe </Link></li>
    </ul>
  </nav>

export default Navbar
