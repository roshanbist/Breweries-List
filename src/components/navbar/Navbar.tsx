import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { navLinks } from '../../constants';

const Navbar = () => {
  const location = useLocation();
  return (
    <ul className='flex flex-1 gap-5 md:gap-10 mx-3 sm:mx-10 justify-end sm:justify-center font-medium md:text-[18px]'>
      {navLinks.map((navItem) => (
        <li key={navItem.label}>
          <Link
            className={`hover:text-orange-700 transition-colors ease-in-out duration-300 ${
              location.pathname === navItem.href ? 'text-orange-700' : ''
            }`}
            to={navItem.href}
          >
            {navItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
