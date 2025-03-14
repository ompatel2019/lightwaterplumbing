// pages/AboutUsPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Components for About Us Page ─────────────────────────────────────
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';

const AboutUsPage = () => {
  // ─── Schema for About Us Page ─────────────────────────────────────────
  const jsonLdAboutUsPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Us",
    "description": "Learn more about Business Name, our values, and our team.",
    "url": "https://example.com/aboutus"
  };

  return (
    <>
      <SeoHelmet
        title="About Us"
        description="Learn more about Business Name, our values, and our team."
        jsonSchema={jsonLdAboutUsPage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <AboutUs />
      <Testimonials />
      <Faqs />
      <CTA />
    </>
  );
};

export default AboutUsPage;
