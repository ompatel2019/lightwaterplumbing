import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const IconComponent = service.serviceImg;
  const serviceSlug = service.serviceName.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="container py-12 space-y-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        <div className="rounded-full bg-white p-8 flex items-center justify-center w-40 h-40 mb-6 md:mb-0 shadow-lg">
          <IconComponent className="w-20 h-20 text-primary" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-4">{service.serviceDesc}</p>
          <p className="text-md text-gray-600 whitespace-pre-line leading-relaxed">
            {service.extendedDescription}
          </p>
          {service.howWeOffer && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-2">
                How We Offer {service.serviceName}
              </h3>
              <p className="text-md text-gray-600 whitespace-pre-line leading-relaxed">
                {service.howWeOffer}
              </p>
            </div>
          )}
          <Link
            to="/services"
            className="inline-block mt-6 text-primary font-semibold underline hover:text-blue-400"
          >
            &larr; Back to All Services
          </Link>
        </div>
      </div>

      {/* Our Process Section */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-inner">
        <h3 className="text-2xl font-bold mb-4">Our Process</h3>
        <p className="text-gray-600 leading-relaxed">
          We begin with an in-depth consultation to understand your needs, followed by detailed planning, precise execution, and thorough follow-up. Every step is crafted to deliver exceptional results and peace of mind.
        </p>
      </section>

      {/* Why Choose Our Service Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Why Choose Our Service?</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li className="pl-2">Expert technicians with years of experience</li>
          <li className="pl-2">Transparent pricing with no hidden fees</li>
          <li className="pl-2">Premium quality materials and modern techniques</li>
          <li className="pl-2">Fast and reliable service, available 24/7</li>
          <li className="pl-2">Customer satisfaction is our top priority</li>
        </ul>
      </section>

      {/* Our Guarantee Section */}
      <section className="bg-gray-50 p-8 rounded-lg shadow-sm">
        <h3 className="text-2xl font-bold mb-4">Our Guarantee</h3>
        <p className="text-gray-600 leading-relaxed">
          We stand behind our work with a commitment to quality and customer care. If you're not completely satisfied, we'll make it right—ensuring your service experience is as smooth as it is reliable.
        </p>
      </section>
    </div>
  );
};

export default Service;
