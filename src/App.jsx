import React, { useEffect, useState } from 'react';
import conf from './conf/conf';
import { useDispatch } from 'react-redux';
import authServices from './appwrite/auth';
import { login, logout } from './reducer/reducer';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = () => {

  const [loading, setLoading] = useState(true);
  let dispatch = useDispatch();


  useEffect(() => {
    authServices.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false));
  }, [])


  if (!loading) {
    return (
      <>
        <div className='h-screen w-full bg-gray-700 '>
          <Header />
          <br />
          <Outlet />
          <Footer />
        </div>

      </>
    )
  } else {
    return <p>login...</p>
  }
}

export default App;
