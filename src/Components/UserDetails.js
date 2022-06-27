import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const params = useParams();

  console.log(params);
  return (
    <div>
      <h1>User Details</h1>
      <p>Details about user {params.userId}</p>
    </div>
  );
}

export default UserDetails;
