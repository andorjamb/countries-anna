import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { useGetAllCountriesQuery } from '../features/dataSlice.js';
import Weather from './Weather';

const CountriesSingle = () => {

  const APIKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const countryName = Object.values(useParams())[0];  //name only

  const { data: countries } = useGetAllCountriesQuery();
  console.log(countries);

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);


  const currentCountry = countries?.filter(country => country.name.common === 'Albania')

  console.log(currentCountry);
  /*  setCountry(currentCountry);   */

  /*   useEffect(() => {
      if (country.languages != null) {
        const languages = Object.values(country.languages);
        console.log(languages);
      }
      setLoading(false)
  
    }, [country]) */

  /*   const languages = Object.values(currentCountry.languages).join(', ');
    console.log(languages); */

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

      <>
        <img src={imageSrc} alt={countryName}></img>
        {/*   <Weather city={country?.capital}></Weather> */}
      </>


    </Container >)

    ;
}

export default CountriesSingle;
