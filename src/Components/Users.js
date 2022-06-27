import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

function Users() {
  return (
    <>
      <nav>
        <Link to='/users/1'>User 1</Link>
        <br />
        <Link to='/users/2'>User 2</Link>
        <br />
        <Link to='/users/3'>User 3</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Users;
