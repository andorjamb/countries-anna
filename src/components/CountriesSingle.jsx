import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const CountriesSingle = () => {

  const countryName = useParams();
  const [country, setCountry] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const countries = [] //fetch from store with hook

  useEffect(() => {
    setIsLoading(true);
    const country = countries.filter(country => country.common.name.toLowerCase() === countryName.toLowerCase());
    setCountry(country);
    setIsLoading(false);

  }, [countries])

  if (isLoading) {
    return (<> Loading </>
    )
  }

  return (

    < Container >
      <div>Single Country will be here</div>
    </Container >)

    ;
}

export default CountriesSingle;
