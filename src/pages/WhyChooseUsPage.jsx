// pages/WhyChooseUsPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Stats from '../components/Stats';
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';

const WhyChooseUsPage = ({ whychooseusImg }) => {

  const stats = [
    { stat: "15", statType: "+", statDesc: "Years Experience" },
    { stat: "100", statType: "+", statDesc: "5-Star Reviews" },
    { stat: "95", statType: "%", statDesc: "First-Time Fix Rate" }
  ];

  return (
    <>
      <SeoHelmet
        title="Why Choose Us | Lightwater Plumbing"
        description="Discover why people trust Lightwater Plumbing for reliable, transparent, and effective plumbing solutions."
        canonicalUrl="https://lightwatergroup.com.au/why-choose-us"
        jsonSchema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Why Choose Lightwater Plumbing in Penrith",
          "description": "Learn why Lightwater Plumbing is Penrith's best choice for plumbing services.",
          "url": "https://lightwatergroup.com.au/why-choose-us"
        }}
      />

      <PageHeading
        img={whychooseusImg}
        route="Home / Why Choose Us"
        heading="Why Choose Us"
        subheading="Choose us for proven expertise, prompt response, and transparency."
    />
      <Stats stats={stats} bg="bg-primary" text="text-white"/>
      <WhyChooseUs bg="bg-white" text="text-textBlack"/>
      <CTAMini text="Contact Us for 24/7 Emergency Support"/>
      <CTA />
      <Testimonials bg="bg-white" text="text-textBlack"/>
    </>
  );
};

export default WhyChooseUsPage;
