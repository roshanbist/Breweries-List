import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Companies from './pages/Companies';
import CompanyDetail from './pages/CompanyDetail';
import SearchResult from './pages/SearchResult';
import Header from './components/header/Header';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className='wrapper w-full overflow-hidden relative'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/companies/:companyId' element={<CompanyDetail />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
