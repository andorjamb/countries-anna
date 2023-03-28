import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Countries from './components/Countries';
import CountriesSingle from './components/CountriesSingle';
import Home from './components/Home';
import Layout from './pages/Layout';
import Favourites from './components/Favourites';





const App = () => {

  /*   const search = useSelector(state => state.countries.search);
    console.log('search', search) */


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:single" element={<CountriesSingle />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
