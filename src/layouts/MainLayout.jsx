// MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../tools/ScrollToTop';

const MainLayout = () => {
  return (
    <>
      {/* <Topbar /> */}
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer bg="bg-white" text="text-textBlack" />
    </>
  );
};

export default MainLayout;
