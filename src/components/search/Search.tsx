import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputSearch(value);
  };

  const searchQueryHandler = (e: { key: string }) => {
    if (e.key === 'Enter' && inputSearch.trim().length > 0) {
      navigate(`/search/${inputSearch}`);
    }
  };

  return (
    <div className='w-full'>
      <input
        type='search'
        value={inputSearch}
        placeholder='Search brewery company here'
        onChange={(e) => inputChangeHandler(e)}
        onKeyDown={searchQueryHandler}
        className='w-full border-0 rounded-[25px] bg-white text-black h-12 px-5 py-4 outline-none'
      />
    </div>
  );
};

export default Search;
