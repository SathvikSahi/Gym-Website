import React, { useContext } from 'react';

import { workouts } from '../data';
import WorkoutSlider from './WorkoutSlider';

import { RefContext } from '../context/RefContext';

const Workouts = (props) => {
  const { title, icon } = workouts;

  const { workoutRef } = useContext(RefContext);

  return (
    <div className="pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[10px]" ref={workoutRef}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between px-4">
          <div className="section-title-group mx-auto px-4 lg:px-0 w-full">
            <img src={icon} alt="icon" />

            <h2 className="h2 text-[28px] md:text-[36px] lg:text-[40px] section-title">
              {title}
              <span className="text-primary-200"> . </span>
            </h2>
          </div>

          <div className="max-w-[360px] md:max-w-none md:w-[80%] lg:w-[95%] px-4 md:px-0">
            <WorkoutSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;