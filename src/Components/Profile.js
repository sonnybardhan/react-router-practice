import React from 'react';
import { useAuth } from '../Utils/auth';
import { Navigate, useNavigate } from 'react-router-dom';

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    // navigate('/');
    navigate('/login', { replace: true });
  };

  // if (!auth.user) {
  //   console.log('login first home boy!');
  //   return <Navigate to='/' />;
  // }

  return (
    <div>
      <h1>Profile</h1>
      <h2>Welcome, {auth.user}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
