// pages/ContactPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';
import Stats from '../components/Stats';
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';

const ContactPage = ({ placeholderImg }) => {
  const jsonLdContactPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Us | Lightwater Plumbing",
    "description": "Reach out to Lightwater Plumbing for reliable plumbing solutions. We're here to help 24/7.",
    "url": "https://example.com/contact"
  };

  const stats = [
    { stat: "30", statType: "+", statDesc: "Services Offered" },
    { stat: "100", statType: "%", statDesc: "Customer Satisfaction" },
    { stat: "250", statType: "+", statDesc: "Emergency Calls Resolved" }
  ];

  return (
    <>
      <SeoHelmet
        title="Contact Us | Lightwater Plumbing"
        description="Reach out to Lightwater Plumbing for reliable plumbing solutions. We're here to help 24/7."
        canonicalUrl="https://example.com/contact"
        jsonSchema={jsonLdContactPage}
      />

      <PageHeading
        placeholderImg={placeholderImg}
        route="Home / Contact Us"
        heading="Contact Us"
        subheading="Get in touch for fast, friendly support—our dedicated team is available 24/7 for all your plumbing needs."
      />
      <Stats stats={stats} bg="bg-primary" text="text-textWhite"/>
      <ContactForm />
      <Faqs />
    </>
  );
};

export default ContactPage;
