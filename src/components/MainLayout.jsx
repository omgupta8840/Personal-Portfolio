import React from 'react'
import Footer from './Footer';
import Nav from './Nav';


const MainLayout = ({ children }) => (
  <div className='bg-indigo-600'>
    <Nav />
    {children}
    <Footer />
  </div>
);

export default MainLayout