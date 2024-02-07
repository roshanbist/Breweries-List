import React from 'react';

import { Company } from '../../misc/interface';
import useFetch from '../../hook/useFetch';

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
      {data.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>
            <a href={item.website_url} target='_blank' rel='noreferrer'>
              {item.website_url}
            </a>
          </div>
          <div>{item.address_1}</div>
          <div>{item.street}</div>
          <div>{item.city}</div>
          <div>{item.state}</div>
          <div>{item.country}</div>
        </div>
      ))}
    </>
  );
};

export default BreweryCard;
