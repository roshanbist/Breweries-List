export type Company = {
  id: string;
  name: string;
  state: string;
  city: string;
  country: string;
  address_1: string;
  street: string;
  website_url: string;
};

export type CompanyProp = {
  companyData: Company;
};
