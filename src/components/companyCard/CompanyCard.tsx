import React from 'react';

import { CompanyProp } from '../../misc/type';
import { Link } from 'react-router-dom';

const CompanyCard = (props: CompanyProp): JSX.Element => {
  return (
    <div className='bg-white rounded-xl p-5 shadow-xl border text-center'>
      <h3 className='text-lg mb block mb-3 font-medium border-b pb-3'>
        {props.companyData.name}
      </h3>
      <span className='block mb-3'>
        <b>Address:</b> {props.companyData.address_1}
      </span>
      <span className='block mb-3'>
        <b>City:</b> {props.companyData.city}
      </span>
      <span className='block mb-3'>
        <b>Country:</b> {props.companyData.country}
      </span>
      <Link
        to={`/companies/${props.companyData.id}`}
        className='bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-3 min-w-[120px] inline-block rounded transition-colors ease-in-out duration-300 text-center capitalize'
      >
        See Detail
      </Link>
    </div>
  );
};

export default CompanyCard;
