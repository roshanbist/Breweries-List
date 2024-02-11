import React from 'react';

import useFetch from '../hook/useFetch';
import { Company } from '../misc/type';
import CompanyCard from '../components/companyCard/CompanyCard';
import Banner from '../components/banner/Banner';
import Loader from '../components/loader/Loader';

const Companies = () => {
  const url = 'https://api.openbrewerydb.org/v1/breweries';

  const { data, loading, error } = useFetch<Company>(url);

  return (
    <>
      <Banner />
      <section className='py-12'>
        <div className='max-container'>
          <h2 className='text-2xl font-medium mb-6'>Brewery Companies List</h2>
          <div className='card-wrap grid sm:grid-cols-2 lg:grid-cols-3 relative gap-7'>
            {loading ? (
              <Loader />
            ) : error ? (
              <p className='text-lg font-medium text-red-600'>{error}</p>
            ) : (
              data &&
              data.map((company) => (
                <CompanyCard key={company.id} companyData={company} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
