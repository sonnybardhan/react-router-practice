import React, { useState } from 'react';
import { useAuth } from '../Utils/auth';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    auth.login(user);
    console.log(location.state?.path);
    const path = location.state?.path || '/products';

    navigate(path, { replace: true });
  };

  return (
    <>
      <div>Login</div>
      <input
        type='text'
        placeholder='enter username'
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
