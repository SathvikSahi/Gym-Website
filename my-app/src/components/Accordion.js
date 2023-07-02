import React, { useState } from 'react';

import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const Accordion = (props) => {
  const { accordion } = props;
  let [isOpen, setIsOpen] = useState( () => false );

  const {
    question,
    answer
  } = accordion;

  return (
    <div className="cursor-pointer">
      <div className="bg-white border rounded-sm">
        <div 
          className="min-h-[68px] flex flex-row items-center justify-between px-[30px]"
          onClick={ () => {
            setIsOpen( () => !isOpen );
          }}
        >
          <h6 className="h6">
            {question}
          </h6>

          <div className="pl-2">
            {
              isOpen ? (
                <FaChevronCircleUp className="text-[20px] text-neutral-500" />
              ) : (
                <FaChevronCircleDown className="text-[20px] text-neutral-500" />
              )
            }
          </div>
        </div>

        <div className={`h-0 overflow-hidden flex flex-row justify-center transition-all duration-300 px-[30px] ${isOpen ? "h-[200px] lg:h-[150px]" : "h-0"}`}>
          <div className="mt-6">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
