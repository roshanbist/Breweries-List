import React from 'react';

import { CompanyProp } from '../../misc/type';
import { Link } from 'react-router-dom';

const CompanyCard = (props: CompanyProp): JSX.Element => {
  return (
    <>
      <div>{props.companyData.name}</div>
      <div>{props.companyData.city}</div>
      <div>{props.companyData.country}</div>
      <Link to={`/companies/${props.companyData.id}`}>
        <button>See Detail</button>
      </Link>
    </>
  );
};

export default CompanyCard;
