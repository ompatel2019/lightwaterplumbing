// MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

// ─── Layout Components ────────────────────────────────────────────────
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../tools/ScrollToTop';

// ─── Tools ───────────────────────────────────────────────────────────
import { BlurFade } from "@/components/magicui/blur-fade";

const MainLayout = () => {
  return (
    <>
      <BlurFade delay={0.15} inView>
        {/* ─── Topbar Section ───────────────────────────────────────── */}
        <Topbar />
        {/* ─── Navigation Bar Section ───────────────────────────────── */}
        <Navbar />
      </BlurFade>

      <ScrollToTop /> 

      {/* ─── Page Content Outlet ─────────────────────────────────----- */}
      <Outlet />

      {/* ─── Footer Section ───────────────────────────────────────── */}
      <Footer bg="bg-white" text="text-textBlack"/>
    </>
  );
};

export default MainLayout;
