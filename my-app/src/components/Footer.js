import React from 'react';

import { footer } from '../data'

const Footer = (props) => {
  const {
    logo,
    copyrightText
  } = footer;

  return (
    <div className="bg-neutral-500 h-[155px] md:h-[135px] lg:h-[145px] px-[20px] md:px-[30px]">
      <div className="container mx-auto flex flex-col gap-y-2 md:flex-row justify-center md:justify-between items-center h-full md:items-end md:pb-[50px]">
        <button>
          <img src={logo} alt="logo" />
        </button>

        <p className="text-neutral-300 text-sm md:text-[16px]">
          {copyrightText}
        </p>
      </div>
    </div>
  );
};

export default Footer;