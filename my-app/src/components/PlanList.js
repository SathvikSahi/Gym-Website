import React, { useState } from 'react';

import { BsCheckCircleFill } from 'react-icons/bs'

const PlanList = (props) => {
  const { plans } = props;
  let [index, setIndex] = useState( () => 0 );

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1200px] mx-auto gap-y-4">
      {
        plans.map( (plan, currentIndex) => {
          const { name, price, list } = plan;

          return (
            <div
              key={currentIndex}
              onClick={ () => {
                setIndex( () => currentIndex );
              }}
              className="w-[85%] md:max-w-[500px] lg:max-w-[400px] rounded-sm px-4 lg:min-h-[550px]"
            >
              <div className={`w-full flex flex-row justify-center items-center px-[20px] lg:px-[30px] py-[60px] lg:py-0 lg:min-h-[550px] transition duration-100 ${currentIndex === index ? "bg-neutral-500 text-white" : "bg-neutral-400/10 text-neutral-500"}`}>
                <div className="flex flex-col gap-y-8 items-center">
                  <div>
                    <div className={`h-[30px] rounded-sm font-primary text-sm font-semibold mx-auto px-[14px] flex flex-row items-center justify-center mb-6 ${currentIndex === index ? "bg-white text-neutral-500" : "bg-neutral-500 text-white"}`}>
                      {name}
                    </div>

                    <div className="text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center">
                      <div className="flex flex-row justify-center items-baseline">
                        <span className="tracking-[0.1px]"> {price} </span>
                        <span className="text-[30px] font-extrabold"> $ </span>
                      </div>

                      <span className="text-sm font-medium"> /month </span>
                    </div>
                  </div>

                  <div>
                    <ul className="flex flex-col gap-y-4 mb-8">
                      {
                        list.map( (item, idx) => {
                          return (
                            <li key={idx} className="flex flex-row gap-x-[10px] items-center">
                              <div>
                                <BsCheckCircleFill className="text-lg" />
                              </div>

                              <div>
                                {item.name}
                              </div>
                            </li>
                          );
                        })
                      }
                    </ul>

                    <button className={`btn btn-lg rounded-[2px] mx-auto ${currentIndex === index ? "bg-white text-neutral-500" : "border border-neutral-500"} `}>
                      Join now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default PlanList;