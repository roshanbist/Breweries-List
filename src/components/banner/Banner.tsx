import React from 'react';

const Banner = () => {
  return (
    <section className='bg-banner bg-cover bg-center h-[450px] flex items-center relative'>
      <div className='overlay absolute w-full top-0 bottom-0 bg-black bg-opacity-50'></div>
      <div className='max-container w-full'>
        <div className='flex flex-col pt-36 pb-20 justify-center items-center relative max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl text-white font-bold'>
            Eat, sleep, <span className='text-amber-500'>Beer</span> Repeat!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
