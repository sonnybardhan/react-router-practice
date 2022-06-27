import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Utils/auth';
function Navbar() {
  const auth = useAuth();

  console.log('auth.user: ', auth.user);

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
      <NavLink to='users' style={navLinkStyles}>
        Users
      </NavLink>
      {auth.user ? (
        `hello, ${auth.user}`
      ) : (
        <NavLink style={navLinkStyles} to='/login'>
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
