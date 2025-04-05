// pages/ServicesPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Stats from '../components/Stats';
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';

const ServicesPage = ({ services, placeholderImg }) => {
  const jsonLdServicesPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Services",
    "description": "Discover our range of professional plumbing and maintenance services in Penrith.",
    "url": "https://example.com/services"
  };

  const stats = [
    { stat: "30", statType: "+", statDesc: "Services Offered" },
    { stat: "100", statType: "%", statDesc: "Customer Satisfaction" },
    { stat: "250", statType: "+", statDesc: "Emergency Calls Resolved" }
  ];

  return (
    <>
      <SeoHelmet
        title="Services | Lightwater Plumbing"
        description="Discover our range of professional plumbing services. From emergency repairs to routine maintenance."
        canonicalUrl="https://example.com/services"
        jsonSchema={jsonLdServicesPage}
      />

      <PageHeading
        placeholderImg={placeholderImg}
        route="Home / Services"
        heading="Services"
        subheading="Our expert team delivers reliable plumbing and electrical services—from emergency repairs to new installations."
      />
      <Stats stats={stats} bg="bg-primary" text="text-white"/>
      <Services bg="bg-white" text="text-textBlack" services={services} isHome={false}/>
      <CTAMini text="Get Your No-Obligation Quote Now"/>
      <CTA bg="bg-white" text="text-textBlack"/>
    </>
  );
};

export default ServicesPage;
