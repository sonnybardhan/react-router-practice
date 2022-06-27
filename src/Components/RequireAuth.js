import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Utils/auth';

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    console.log('Nope!');
    return <Navigate to='/login' state={{ path: location.pathname }} />;
  }

  return children;
}

export default RequireAuth;
