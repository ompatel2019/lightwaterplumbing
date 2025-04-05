import React from 'react';
import { TbHours24 } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

const Topbar = () => {
  const leftText = 'Open 24-Hours';
  const phoneNumber = '0432 147 251';

  return (
    <header
      className="responsivePad bg-primary font-supreme-medium
      flex justify-between 2xl:py-6 lg:py-4 py-2 text-textWhite"
    >
      <div className='flex justify-center items-center gap-1'>
        <TbHours24 className='h7' />
        <p className="text-center p">{leftText}</p>
      </div>

      <div className="flex items-center gap-2 md:rounded-lg rounded-md hover:underline transition-all">
        <FiPhoneCall className="text-textWhite w-5 h-5" />
        <a href="tel:0432 147 251" className="text-textWhite p">
          Call Now {phoneNumber}
        </a>
      </div>
    </header>
  );
};

export default Topbar;
