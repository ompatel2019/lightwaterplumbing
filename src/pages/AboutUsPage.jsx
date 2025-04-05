// pages/AboutUsPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';
import PageHeading from '../components/PageHeading';
import Stats from '../components/Stats';
import CTAMini from '../components/CTAMini';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';

const AboutUsPage = ({ placeholderImg }) => {
  
  const stats = [
    { stat: "30", statType: "+", statDesc: "Services Offered" },
    { stat: "800", statType: "+", statDesc: "Satisfied Customers" },
    { stat: "2500", statType: "+", statDesc: "Projects Completed" }
  ];

  return (
    <>
      <SeoHelmet
        title="About Us | Lightwater Plumbing"
        description="Discover our mission, values, and the dedicated team behind our plumbing services."
        canonicalUrl="https://lightwatergroup.com.au/about-us"
        jsonSchema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About Us | Lightwater Plumbing",
          "description": "Learn more about Lightwater Plumbing, our values, and our team serving Penrith.",
          "url": "https://lightwatergroup.com.au/about-us"
        }}
      />

      <PageHeading
        placeholderImg={placeholderImg}
        route="Home / About Us"
        heading="About Us"
        subheading="Learn about our history, mission, and how we serve with top-notch plumbing solutions."
      />
      <Stats stats={stats} bg="bg-primary" text="text-textWhite"/>
      <AboutUs bg="bg-white" text="text-textBlack"/>
      <CTAMini text="Get Your No-Obligation Quote Now"/>
      <Testimonials bg="bg-white" text="text-textBlack"/>
      <Faqs />
      <CTA />
    </>
  );
};

export default AboutUsPage;
