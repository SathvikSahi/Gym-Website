import React, { useContext } from 'react';

import { community } from '../data';
import CommunitySlider from './CommunitySlider';

import { RefContext } from '../context/RefContext';

const Community = (props) => {
  const { title, icon } = community;

  const { communityRef } = useContext(RefContext);

  return (
    <div className="pt-[110px] md:pt-[130px] lg:pt-[150px] pb-[5px]" ref={communityRef}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 gap-x-8">
          <div className="section-title-group mx-auto px-4 lg:px-0 w-full lg:w-[40%]">
            <img src={icon} alt="icon" />

            <h2 className="h2 text-[28px] md:text-[36px] lg:text-[40px] section-title">
              {title}
              <span className="text-primary-200"> . </span>
            </h2>
          </div>

          <div className="max-w-[360px] md:max-w-none md:w-[82%] lg:w-[60%] px-4 md:px-0">
            <CommunitySlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;