import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import Service from './ServiceTab';
import SectionHeader from './SectionHeader';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Services = ({ services, bg, text, isHome }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const buttonClass =
    'group flex items-center gap-2 w-fit text-black bg-primary hover:bg-black text-center rounded-md p hover:text-white hover:border-white p-4 transition-all duration-300 font-medium';

  return (
    <Section bg={bg} text={text}>
      <div className="flex max-md:flex-col md:justify-between md:items-center 2xl:gap-8 md:gap-6 gap-4 mb-8">
        <div className="flex-1">
          <SectionHeader
            sectionName="Our Services"
            sectionHeader="Professional Plumbing Solutions for Every Need"
            sectionDesc={
              isHome
                ? 'From emergency repairs to complete installations, our expert team is ready to tackle any plumbing challenge.'
                : ''
            }
          />
        </div>

        {isHome && (
          <div className="max-md:self-start">
            <Link to="/services" className={buttonClass}>
              <span className="text-textWhite">View All Services</span>
              <ChevronRight
                size={20}
                className="ml-[-5px] mt-[0.5px] group-hover:translate-x-1 transition-transform duration-300 text-textWhite"
              />
            </Link>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 md:gap-8 gap-6">
        {services.map((service, index) => (
          <Service
            key={index}
            serviceImg={service.serviceImg}
            serviceName={service.serviceName}
            serviceDesc={service.serviceDesc}
            serviceClass={service.className}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      {!isHome && (
        <div className="mt-12 text-center flex justify-center">
          <Link to="/contact-us" className={buttonClass}>
            <span className="text-textWhite">Need a Custom Solution?</span>
            <ArrowRight size={18} color="#fff" />
          </Link>
        </div>
      )}
    </Section>
  );
};

export default Services;