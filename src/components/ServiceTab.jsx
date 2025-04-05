import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const Service = ({ serviceImg, serviceName, serviceDesc, onMouseEnter, onMouseLeave }) => {
  const serviceSlug = slugify(serviceName);
  const IconComponent = serviceImg;

  return (
    <Link
      to={`/services/${serviceSlug}`}
      className="group flex flex-col justify-between h-full lg:p-8 p-6 rounded-lg bg-primary-100 hover:bg-[#3157f4] transition-all duration-300 border border-transparent hover:border-gray-500 relative overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Decorative corner accent */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-white opacity-0 group-hover:opacity-20 transform rotate-45 transition-all duration-300"></div>

      <div className="flex flex-col space-y-4">
        <div className="p-3 rounded-lg inline-block">
          <IconComponent className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
        </div>

        <h5 className="font-supreme-medium text-left text-lg group-hover:text-gray-300 transition-colors duration-300 text-textDark">
          {serviceName}
        </h5>

        <p className="font-supreme text-sm text-left group-hover:text-textWhite text-textDark">
          {serviceDesc}
        </p>
      </div>
    </Link>
  );
};

export default Service;