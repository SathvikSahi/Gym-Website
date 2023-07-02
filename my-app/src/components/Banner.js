import React, { useContext } from 'react';

import { banner } from '../data';
import { RefContext } from '../context/RefContext';

const Banner = (props) => {
  const {
    titlePart1,
    titlePart2,
    subtitle,
    textBtn
  } = banner;

  const { homeRef } = useContext(RefContext);

  return (
    <div className="bg-neutral-500 h-[610px] mb-[5px]" ref={homeRef}>
      <div className="container mx-auto h-full">
        <div className="flex flex-row items-center h-full relative -space-x-48 lg:-space-x-24">
          <div className="text-white flex-1 z-10 pl-6">
            <h1 className="h1 text-white mb-8">
              {titlePart1}
              <span className="text-primary-200"> {titlePart2} </span>
            </h1>

            <p className="max-w-[415px] text-body-md lg:text-body-lg mb-8">
              {subtitle}
            </p>

            <button className="btn btn-sm lg:btn-lg btn-secondary">
              {textBtn}
            </button>
          </div>

          <div className="bg-banner w-full h-full bg-cover bg-no-repeat flex-1">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;