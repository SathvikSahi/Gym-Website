import React, { useContext } from 'react';

import { about } from '../data';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

import { RefContext } from '../context/RefContext';

const About = () => {
  const {
    title,
    subtitle1,
    subtitle2,
    icon,
    link
  } = about;

  const { aboutRef } = useContext(RefContext);

  return (
    <div className="pt-[80px] md:pt-[100px] lg:pt-[120px]" ref={aboutRef}>
      <div className="container mx-auto px-[25px] lg:px-[135px]">
        <div className="section-title-group justify-start">
          <img src={icon} alt="icon" />

          <h2 className="h2 section-title">
            {title}
            <span className="text-primary-200"> . </span>
          </h2>
        </div>

        <p className="md:text-body-md mb-10">
          {subtitle1}
        </p>

        <p className="md:text-body-md mb-10">
          {subtitle2}
        </p>

        <div>
          <button className="link flex flex-row gap-x-4 hover:gap-x-6 item-center transition-all">
            {link}
            <IoIosArrowDroprightCircle className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;