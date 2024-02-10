import React from 'react';

import { Link, useParams } from 'react-router-dom';
import { Company } from '../misc/type';
import useFetchDetail from '../hook/useFetchDetails';
import Banner from '../components/banner/Banner';
import BeerImage from '../images/beer.jpg';
import Loader from '../components/loader/Loader';

const CompanyDetail = () => {
  const { companyId } = useParams();

  const url = `https://api.openbrewerydb.org/v1/breweries/${companyId}`;

  const { data, loading, error } = useFetchDetail<Company>(url);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // console.log('data', data);

  return (
    <>
      <Banner />
      <section className='py-10'>
        <div className='max-container'>
          <h2 className='text-2xl font-medium mb-6 text-center '>
            Company Details
          </h2>
          <div className='relative'>
            {loading && <Loader />}
            {error && error}
            {data && (
              <div className='shadow-md bg-white rounded-xl border p-6 w-[640px] mx-auto'>
                <div className='w-full h-[350px] overflow-hidden'>
                  <img
                    className='object-cover w-full h-full rounded-lg rounded-b-none'
                    src={BeerImage}
                    alt='beer'
                  />
                </div>
                <div className='company-in text-[18px] pt-6'>
                  <h3 className='text-lg mb block mb-3 font-medium border-b pb-3'>
                    {data?.name}
                  </h3>
                  <span className='block mb-3'>
                    <b className='w-[80px] inline-block'>Address:</b>{' '}
                    {data?.address_1}
                  </span>
                  <span className='block mb-3'>
                    <b className='w-[80px] inline-block'>Street:</b>{' '}
                    {data?.street}
                  </span>
                  <span className='block mb-3'>
                    <b className='w-[80px] inline-block'>City:</b> {data?.city}
                  </span>
                  <span className='block mb-3'>
                    <b className='w-[80px] inline-block'>State:</b>{' '}
                    {data?.state}
                  </span>
                  <span className='block mb-3'>
                    <b className='w-[80px] inline-block'>Country:</b>{' '}
                    {data?.country}
                  </span>
                  <div className='flex justify-center pt-5'>
                    <Link
                      to={`${data?.website_url}`}
                      target='_blank'
                      rel='noreferrer'
                      className='bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-3 w-full rounded-lg transition-colors ease-in-out duration-300 text-center capitalize'
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyDetail;
