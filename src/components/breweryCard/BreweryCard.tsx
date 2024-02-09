import React from 'react';

import { Company } from '../../misc/type';
import useFetch from '../../hook/useFetch';
import { Link } from 'react-router-dom';

const BreweryCard = (): JSX.Element => {
  const url = 'https://api.openbrewerydb.org/v1/breweries';

  const { data, loading, error } = useFetch<Company>(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data?.map((company) => (
        <div key={company.id}>
          <div>{company.name}</div>
          <div>{company.city}</div>
          <div>{company.country}</div>
          <Link to={`/companies/${company.id}`}>
            <button>See Detail</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BreweryCard;
