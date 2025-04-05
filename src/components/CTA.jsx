import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';

const CTA = ({ bg, text }) => {
  // Array of feature cards to avoid repetition
  const features = [
    {
      icon: 'bi bi-shield-check',
      title: 'Trustworthy',
      description: 'Rely on our integrity, accountability, and dedication for every project, big or small.'
    },
    {
      icon: 'bi bi-lightning-charge',
      title: 'Fast Response',
      description: 'We prioritize rapid assistance, ensuring minimal downtime for your home or business.'
    },
    {
      icon: 'bi bi-award',
      title: 'Quality Guaranteed',
      description: 'We stand by our workmanship, delivering exceptional results with top-grade materials.'
    },
  ];

  return (
    <Section bg={bg} text={text}>
      <div className="container mx-auto px-4 py-10 flex flex-col items-center space-y-8 text-center font-supreme">
        
        {/* Bold Headline */}
        <h2 className="text-3xl md:text-4xl font-supreme-extrabold tracking-tight">
          Choose Us for Exceptional Service
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
          Our team is dedicated to delivering top-tier solutions that uphold reliability, efficiency, and
          unmatched customer satisfaction.
        </p>

        {/* Feature Cards (Logos + Titles + Descriptions) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg p-6 py-10 flex flex-col items-center space-y-3 bg-primary-100"
            >
              {/* Icon (using Bootstrap Icons classes) */}
              <i className={`${feature.icon} text-5xl text-blue-600`} />
              
              {/* Title */}
              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <Link
            to="/contact-us"
            className="inline-block rounded bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
