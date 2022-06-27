import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('filter'));
  const displayUsers = searchParams.get('filter');

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
      <div>
        <button onClick={() => setSearchParams({ filter: 'Active Users' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams('')}>Reset Filter</button>
      </div>
      <div className=''>
        {displayUsers ? (
          <h3>showing Active users</h3>
        ) : (
          <h3>showing All users</h3>
        )}
      </div>
    </>
  );
}

export default Users;
