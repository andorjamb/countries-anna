import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Weather from './Weather';

const CountriesSingle = () => {

  const countryName = Object.values(useParams())[0];  //name only

  console.log(countryName);
  /*   const [country, setCountry] = useState(undefined);
    const countries = useSelector((state) => state.countryStore);
    console.log('in countriesSingle:', countries[0]); */

  /* 
    setCountry(countries.filter(country => country.common.name.toLowerCase() === countryName.toLowerCase())); */


  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state.country;
  console.log('country from location:', country);
  const languages = Object.values(country.languages).join(', ');
  console.log(languages);
  /*  useEffect(() => {
     if (country.languages != null) {
       languages = Object.values(country.languages);
       console.log(languages);
     } */

  // }, [country])
  const imageSrc = `https://source.unsplash.com/500x400/?${countryName}`




  return (

    < Container >
      <div>Single Country will be here</div>
      <Weather city={country.capital}></Weather>
    </Container >)

    ;
}

export default CountriesSingle;
