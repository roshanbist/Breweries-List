import React, { useCallback, useState } from 'react';

import lodash from 'lodash';
import { Navigate, useNavigate } from 'react-router-dom';

const Search = () => {
  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();

  // const searchByName = () => {
  //   // console.log('query', query);
  //   console.log('query');
  // };

  // const debounceSearchByName = lodash.debounce(searchByName, 3000);

  // const callBackSearchByName = useCallback(() => {
  //   debounceSearchByName();
  // }, []);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputSearch(value);
    // setQuery(value);
    // searchByName();
    // debounceSearchByName();
    // callBackSearchByName();
  };

  const searchQueryHandler = (e: { key: string }) => {
    if (e.key === 'Enter' && inputSearch.trim().length > 0) {
      // console.log('yes enter');
      navigate(`/search/${inputSearch}`);
    }
  };

  return (
    <>
      <input
        type='search'
        value={inputSearch}
        placeholder='Search brewery company here'
        onChange={(e) => inputChangeHandler(e)}
        onKeyDown={searchQueryHandler}
      />
      {/* <p>{query}</p> */}
    </>
  );
};

export default Search;
