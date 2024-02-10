import React from 'react';
import { useParams } from 'react-router-dom';

import { Company } from '../misc/type';
import useFetchName from '../hook/useFetchName';
import CompanyCard from '../components/companyCard/CompanyCard';
import Banner from '../components/banner/Banner';
import Loader from '../components/loader/Loader';

const SearchResult = () => {
  const { query } = useParams();
  // console.log('name', query);

  const url = `https://api.openbrewerydb.org/v1/breweries?by_name=${query}`;

  const { data, loading, error } = useFetchName<Company>(url);

  // console.log('data aayo', data);

  // if (loading) {
  //   // console.log('loading...');
  //   return <div>loading....</div>;
  // }

  // if (error) {
  //   // console.log(error);
  //   return <div>{error}</div>;
  // }

  return (
    <>
      <Banner />
      <section className='py-12'>
        <div className='max-container'>
          <h2 className='text-2xl font-medium mb-6'>
            Search Result for "{query}"
          </h2>
          <div className='card-wrap gap-7 grid sm:grid-cols-2 lg:grid-cols-3 relative'>
            {loading && <Loader />}
            {error && error}
            {data?.map((company) => (
              <CompanyCard key={company.id} companyData={company} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchResult;
