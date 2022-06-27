import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontSize: isActive ? '24px' : '15px',
      color: isActive ? 'green' : 'blue',
      fontWeight: isActive ? 'bold' : '',
      textDecoration: 'none',
    };
  };

  return (
    <nav className='primary-nav'>
      <NavLink to='/' style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to='/about'>
        About
      </NavLink>
      <NavLink style={navLinkStyles} to='/products'>
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to='/profile'>
        Profile
      </NavLink>
    </nav>
  );
}

export default Navbar;
