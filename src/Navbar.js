import React from 'react'
import { Link } from 'react-router';

import Navigation from 'react-toolbox/lib/navigation';


const NavBar = props =>
<nav className="breadcrumbs" role='menubar' ariaLabel="breadcrumbs">
      <Navigation type='horizontal'><Link to='/'> Home </Link></Navigation>
      <Navigation type='horizontal'><Link to='/contact'> Contact Us </Link></Navigation>
      <Navigation type='horizontal'><Link to='/disclaimer'> Disclaimer </Link></Navigation>
      <Navigation type='horizontal'><Link to='/login'> Log-In </Link></Navigation>
      <Navigation type='horizontal'><Link to='/signup'> Sign Up </Link></Navigation>
      <Navigation type='horizontal'><Link to='/blog' > Blog </Link></Navigation>
      <Navigation type='horizontal'><Link to='/subscribe'> Subscribe </Link></Navigation>
</nav>


export default NavBar;
