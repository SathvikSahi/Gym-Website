import React from 'react';

import { nav } from '../data'

const Nav = (props) => {
  const { refMapper } = props;

  return (
    <div className="hidden lg:flex ml-4">
      <ul className="flex gap-x-8 text-white">
        {
          nav.map( (item, index) => {
            return (
              <li key={index}>
                <button 
                  className="hover:text-primary-200 transition-all"
                  onClick={ refMapper[item.name.toLowerCase()] }
                >
                  {item.name}
                </button>
            </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Nav;