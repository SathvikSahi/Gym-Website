import React from 'react';

import { nav } from '../data'

const NavMobile = (props) => {
  const { navMobile, setNavMobile, refMapper } = props;

  return (
    <div className={`${navMobile ? 'top-0' : '-top-[100vh]'} w-full absolute left-0 bg-neutral-500 -z-10 lg:hidden transition-all duration-500 h-screen flex flex-col justify-around pb-10 pt-20`}>
      <ul className="w-full flex flex-col gap-y-8 justify-center items-center">
        {
          nav.map( (item, index) => {
            return (
              <li key={index}>
                <button 
                  className="text-white text-body-md hover:text-primary-200 transition-all"
                  onClick={ () => {
                    setNavMobile( () => false );
                    setTimeout( () => {
                      refMapper[item.name.toLowerCase()]();
                    }, 300); 
                  }}
                >
                  {item.name}
                </button>
              </li>
            );
          })
        }
      </ul>

      <div className="mt-10 flex justify-center gap-x-8">
        <button className="btn btn-lg text-white hover:text-primary-200 transition-all">
          LOG IN
        </button>

        <button className="btn btn-lg btn-primary">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default NavMobile;