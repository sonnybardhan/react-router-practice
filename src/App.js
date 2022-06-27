// import logo from './logo.svg';
// import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
// import About from './Components/About';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import PageNotFound from './Components/PageNotFound';
import Featured from './Components/Featured';
import New from './Components/New';
import Users from './Components/Users';
import UserDEtails from './Components/UserDetails';
import UserDetails from './Components/UserDetails';
import Admin from './Components/Admin';

export const LazyAbout = lazy(() => import('./Components/About'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/about'
          element={
            <Suspense fallback='loading ... '>
              <LazyAbout />
            </Suspense>
          }
        />

        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />}>
          <Route index element={<Featured />} />
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
