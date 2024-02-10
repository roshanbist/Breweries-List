import React from 'react';

const Loader = () => {
  return (
    <div
      className='animate-spin inline-block w-10 h-10 border-[5px] border-current border-t-transparent text-orange-400 rounded-full dark:text-blue-500 absolute left-[50%] translate-x[-50%] top-0'
      role='status'
      aria-label='loading'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default Loader;
