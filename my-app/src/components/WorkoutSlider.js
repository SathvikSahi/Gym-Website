import React, { useState } from 'react';

import { workouts } from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css';

const WorkoutSlider = () => {
  const { programs } = workouts;
  let [mySwiper, setMySwiper] = useState( () => {} );

  return (
    <div>
      <Swiper
        onInit={ (event) => {
          setMySwiper( () => event );
        }}

        slidesPerView={1}
        spaceBetween={15}

        grabCursor={true}

        breakpoints={
          {
            768: {
              slidesPerView: 2,
              spaceBetween: 15
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 15
            }
          }
        }
      >
        {
          programs.map( (program, index) => {
            const { image, name } = program;

            return (
              <SwiperSlide key={index} className="relative">
                <img className="w-[100%] h-[320px] object-cover" src={image} alt="image" />

                <div className="absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center justify-center rounded-[2px]">
                  <div className="font-primary font-semibold text-sm text-neutral-500">
                    {name}
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      <div className="workoutSlider flex flex-row items-center justify-center gap-x-10 pt-14">
          <button 
            className="swiper-button-prev"
            onClick={ () => {
              mySwiper.slidePrev();
            }}
          >
          </button>

          <button 
            className="swiper-button-next"
            onClick={ () => {
              mySwiper.slideNext();
            }}
          >
          </button>
      </div>
    </div>
  );
};

export default WorkoutSlider;