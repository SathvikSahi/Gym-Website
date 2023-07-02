import React, { useState, useEffect, useContext } from 'react';

import { header } from '../data';
import { RefContext } from '../context/RefContext';

import Nav from './Nav';
import NavMobile from './NavMobile';

import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'

const Header = (props) => {
  let [isActive, setIsActive] = useState( () => false );
  let [navMobile, setNavMobile] = useState( () => false );

  const {
    homeRef, 
    aboutRef, 
    workoutRef, 
    pricingRef, 
    communityRef, 
    faqRef
  } = useContext(RefContext);

  const refMapper = {
    home: () => {
      homeRef.current.scrollIntoView( {behavior: "smooth"} );
    },

    about: () => {
      aboutRef.current.scrollIntoView({behavior: "smooth"});
    },

    workouts: () => {
      workoutRef.current.scrollIntoView({behavior: "smooth"});
    },

    pricing: () => {
      pricingRef.current.scrollIntoView({behavior: "smooth"});
    },

    community: () => {
      communityRef.current.scrollIntoView({behavior: "smooth"});
    },

    faq: () => {
      faqRef.current.scrollIntoView({behavior: "smooth"});
    }
  };

  useEffect( () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60)
      {
        setIsActive( () => true );
      }

      else 
      {
        setIsActive( () => false );
      }
    });
  }, []);

  const {
    logo, 
    btnLoginText,
    btnSignupText
  } = header;

  return (
    <div className={`fixed max-w-[1440px] left-0 right-0 mx-auto flex justify-between items-center px-[40px] lg:px-[70px] z-30 transition-all duration-300 ${isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"}`}>
      <button>
        <img className="h-[30px]" src={logo} alt="logo" />
      </button>

      <Nav refMapper={refMapper}/>

      <div className="hidden lg:flex space-x-4">
        <button className="btn btn-sm text-white hover:text-primary-200 transition-all">
          {btnLoginText}
        </button>

        <button className="btn btn-sm btn-primary">
          {btnSignupText}
        </button>
      </div>

      <div
        onClick={() => setNavMobile(!navMobile)}
        className='lg:hidden'
      >
        {
          navMobile ? (
            <RiCloseFill className='text-3xl text-primary-200 cursor-pointer' />
          ) : (
            <RiMenu4Fill className='text-3xl text-primary-200 cursor-pointer' />
          )
        }
      </div>

      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} refMapper={refMapper}/>
    </div>
  );
};

export default Header;