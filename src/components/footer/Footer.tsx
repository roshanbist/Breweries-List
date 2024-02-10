import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black py-10'>
      <div className='max-container text-center text-white md:text-lg'>
        <p className='mb-3'>This project is powered by Open Brewery DB api.</p>
        <p>
          Developed by{' '}
          <a
            href='https://github.com/roshanbist'
            target='_blank'
            rel='noreferrer'
            className='text-orange-400 hover:text-orange-500 transition-colors ease-in-out duration-300'
          >
            Roshan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
