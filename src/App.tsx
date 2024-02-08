import React from 'react';

// import BreweryCard from './components/breweryCard/BreweryCard';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Companies from './pages/Companies';
import CompanyDetail from './pages/CompanyDetail';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/companies/:companyId' element={<CompanyDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
