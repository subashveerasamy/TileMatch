
import { useState } from 'react'
import React from 'react'
import { Outlet } from 'react-router-dom';
import MyContext from './Context/MyContext';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn]= useState(false);
  return (
    <MyContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <Outlet />
    </MyContext.Provider>
  )
  
}

export default Home