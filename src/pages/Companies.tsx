import React from 'react';

// import CompanyCard from '../components/CompanyCard/CompanyCard';
import useFetch from '../hook/useFetch';
import { Company } from '../misc/type';
import CompanyCard from '../components/companyCard/CompanyCard';

const Companies = () => {
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
        // console.log('company', company);
        // <div key={company.id}>
        //   <div>{company.name}</div>
        //   <div>{company.city}</div>
        //   <div>{company.country}</div>
        //   <Link to={`/companies/${company.id}`}>
        //     <button>See Detail</button>
        //   </Link>
        // </div>
        <CompanyCard key={company.id} companyData={company} />
      ))}
    </>
  );
};

export default Companies;
