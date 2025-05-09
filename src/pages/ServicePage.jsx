// pages/ServicePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { slugify } from '../utils/slugify';

// Tools & Components
import SeoHelmet from '../tools/SeoHelmet';
import CTAMini from '../components/CTAMini';
import Section from '../components/Section';
import PageHeadingHeader from '../components/PageHeadingHeader';
import CTA from '../components/CTA';
import NotFoundPage from './NotFoundPage';
import Service from '../components/Service';

const ServicePage = ({ services }) => {
  const { slug } = useParams();
  const service = services.find((s) => slugify(s.serviceName) === slug);

  if (!service) {
    return <NotFoundPage />;
  }

  const canonicalUrl = `https://lightwatergroup.com.au/services/${slug}`;
  return (
    <>
      <SeoHelmet
        title={`${service.serviceName} | Lightwater Plumbing`}
        description={`Learn about our ${service.serviceName}. ${service.serviceDesc}`}
        canonicalUrl={canonicalUrl}
        jsonSchema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.serviceName,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Lightwater Plumbing",
            "areaServed": "Penrith, Australia"
          },
          "description": service.serviceDesc,
          "url": canonicalUrl
        }}
      />

      <CTAMini text="Book online and receive $50 off your first service" />

      <Section bg="bg-white" text="text-textBlack">
        <PageHeadingHeader
          route={`Home / Services / ${service.serviceName}`}
          heading={service.serviceName}
        />

        <Service service={service} />
      </Section>

      <CTA />
    </>
  );
};

export default ServicePage;
