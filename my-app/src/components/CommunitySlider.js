import React, { useState } from 'react';

import { community } from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css';

const CommunitySlider = () => {
  const { testimonials } = community;
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
              slidesPerView: 2,
              spaceBetween: 15
            }
          }
        }
      >
        {
          testimonials.map( (testimonial, index) => {
            const { image, name, message } = testimonial;

            return (
              <SwiperSlide key={index} className="relative">
                <img className="w-[100%] h-[320px] object-cover" src={image} alt="image" />

                <div className="absolute bottom-[20px] px-[15px] py-[5px] text-white text-center">
                  <div className="mb-2 italic text-lg font-light">
                    {message}
                  </div>

                  <div className="flex flex-row items-center justify-center gap-x-1">
                    <span className="text-[30px] text-primary-200 font-bold"> ~ </span>
                    <div className="text-[20px] font-bold">
                      {name}
                    </div>
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

export default CommunitySlider;