import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Companies from './pages/Companies';
import CompanyDetail from './pages/CompanyDetail';
import SearchResult from './pages/SearchResult';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/companies/:companyId' element={<CompanyDetail />} />
        <Route path='/search/:query' element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
