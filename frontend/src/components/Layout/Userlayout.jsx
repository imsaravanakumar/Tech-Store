import React from 'react';
import Header from '../Comman/Header';
import Footer from '../Comman/Footer';
import { Outlet } from 'react-router-dom';

const Userlayout = ({ token, setToken }) => {
  return (
    <div className='mx-auto container'>
      <Header token={token} setToken={setToken}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Userlayout;
