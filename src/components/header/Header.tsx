import React from 'react';

import Navbar from '../navbar/Navbar';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header className='fixed top-0 w-full py-2 bg-gray-300 bg-opacity-70 z-10 shadow-md'>
      <nav className='max-container flex max-sm:justify-between items-center'>
        <a href='/'>
          <img src={logo} alt='Beer Company ' width={100} height={100} />
        </a>
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
