import React from 'react';
import { useParams } from 'react-router-dom';

import { Company } from '../misc/type';
import useFetchName from '../hook/useFetchName';
import CompanyCard from '../components/companyCard/CompanyCard';

const SearchResult = () => {
  const { query } = useParams();
  console.log('name', query);

  const url = `https://api.openbrewerydb.org/v1/breweries?by_name=${query}`;

  const { data, loading, error } = useFetchName<Company>(url);

  console.log('data aayo', data);

  if (loading) {
    // console.log('loading...');
    return <div>loading....</div>;
  }

  if (error) {
    // console.log(error);
    return <div>{error}</div>;
  }

  return (
    <>
      {data?.map((company) => (
        <CompanyCard key={company.id} companyData={company} />
      ))}
    </>
  );
};

export default SearchResult;
