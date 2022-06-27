import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Products() {
  return (
    <>
      <h1>Products</h1>
      <nav style={{ background: '#eee', padding: '5px', marginBottom: '10px' }}>
        <NavLink to='featured'>Featured</NavLink>
        <NavLink to='new'>New</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
