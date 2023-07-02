import React from 'react';

import { join } from '../data';

const Join = (props) => {
  const {
    image,
    title,
    subtitle,
    btnText
  } = join;

  return (
    <div className="bg-neutral-500 md:pt-2 mt-[50px] md:mt-[10px] lg:mt-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="-mt-[80px] max-w-[276px] md:max-w-[312px] lg:max-w-[376px] ml-[30px]">
            <img src={image} alt="image" />
          </div>

          <div className="max-w-[350px] lg:max-w-[492px] ml-[30px] mt-[30px] md:mt-0">
            <h2 className="h2 text-[30px] md:text-[40px] md:leading-[42px] text-white mb-4 lg:mb-6">
              Wanna join 
              <span className="text-primary-200"> have fun? </span>
            </h2>

            <p className="text-body-sm md:text-body-md text-white mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]">
              {subtitle}
            </p>

            <button className="btn btn-secondary btn-lg">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;