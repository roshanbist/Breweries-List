import React from 'react';

import { Link, useParams } from 'react-router-dom';
import { Company } from '../misc/type';
import useFetchDetail from '../hook/useFetchDetails';

const CompanyDetail = () => {
  const { companyId } = useParams();

  const url = `https://api.openbrewerydb.org/v1/breweries/${companyId}`;

  const { data, loading, error } = useFetchDetail<Company>(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log('data', data);

  return (
    <>
      <div>{data?.name}</div>
      <div>{data?.address_1}</div>
      <div>{data?.street}</div>
      <div>{data?.city}</div>
      <div>{data?.state}</div>
      <div>
        <Link to={`${data?.website_url}`} target='_blank' rel='no-referrer'>
          {data?.website_url}
        </Link>
      </div>
      <div>{data?.country}</div>
    </>
  );
};

export default CompanyDetail;
