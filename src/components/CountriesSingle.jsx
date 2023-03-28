import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Weather from './Weather';

const CountriesSingle = () => {

  const countryName = useParams();
  const [country, setCountry] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const countries = [] //fetch from store with hook

  /*   useEffect(() => {
      setIsLoading(true);
      const country = countries.filter(country => country.common.name.toLowerCase() === countryName.toLowerCase());
      setCountry(country);
      setIsLoading(false);
  
    }, [countries])
  
    if (isLoading) {
      return (<> Loading </>
      )
    } */

  //const languages = Object.values(country.languages);
  //console.log(languages);
 /*  useEffect(() => {
    if (country.languages != null) {
      languages = Object.values(country.languages);
      console.log(languages);
    } */

 // }, [country])



  return (

    < Container >
      <div>Single Country will be here</div>
      <Weather></Weather>
    </Container >)

    ;
}

export default CountriesSingle;
