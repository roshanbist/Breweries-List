import React from 'react';

import Search from '../search/Search';

const HomeBanner = () => {
  return (
    <section className='bg-banner bg-cover bg-center min-h-screen flex items-center relative'>
      <div className='overlay absolute w-full top-0 bottom-0 bg-black bg-opacity-50'></div>
      <div className='max-container w-full'>
        <div className='flex flex-col py-36 justify-center items-center relative max-w-3xl mx-auto text-center'>
          <h1 className='text-white text-3xl md:text-4xl mb-5 font-bold'>
            Welcome.
          </h1>
          <span className='block text-white tracking-wider text-lg mb-5'>
            Just chill like{' '}
            <span className='text-amber-500 uppercase'>Beer</span>!
          </span>
          <Search />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
