import React, { useContext } from 'react';

import { faq } from '../data';
import Accordion from './Accordion';

import { RefContext } from '../context/RefContext';

const Faq = (props) => {
  const {
    icon,
    title,
    accordions
  } = faq;

  const { faqRef } = useContext(RefContext);
  console.log(useContext(RefContext));

  return (
    <div className="pt-[100px] md:pt-[120px] lg:pt-[140px] pb-[180px]" ref={faqRef}>
      <div className="max-w-[768px] mx-auto">
        <div className="section-title-group justify-start -space-x-4 lg:max-w-[540px] mx-auto px-12 lg:px-0">
          <img src={icon} alt="icon" />

          <h2 className="h2 h2 text-[30px] md:text-[38px] lg:text-[42px] section-title">
            {title}
            <span className="text-primary-200"> . </span>
          </h2>
        </div>

        <div className="flex flex-col gap-y-4 px-4">
          {
            accordions.map( (accordion, index) => {
              return (
                <Accordion accordion={accordion} key={index} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Faq;