import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { useGetAllCountriesQuery } from '../features/dataSlice.js';
import Weather from './Weather';
import '../customStyles/countriesSingle.css'

const CountriesSingle = () => {

  const countryName = Object.values(useParams())[0];  //name only
  const arrayZero = [];

  const {
    data: countries = [],
    isLoading,
    isFetching,
    error,
  } = useGetAllCountriesQuery();;
  console.log(countries);


  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);


  countries.forEach((country) => {
    console.log(country.capital);
    if (country.name.common === countryName) {
      arrayZero.push(country);

    }
  })

  //console.log(currentCountry);

  const imageSrc = `https://source.unsplash.com/500x400/?${countryName}`

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




  return (


    <Container> {isLoading || isFetching ? (<>Loading....</>) : (<>
      <Row>
        <Col><img className="photo" src={imageSrc} alt={countryName}></img></Col>
        <Col>
          <h3>Bridgetown</h3>
          <table><tbody>
            <tr><th>Official Name</th><td></td></tr>
            <tr><th>Region</th><td></td></tr>
            <tr><th>Languages</th><td></td></tr>
            <tr><th>Currency</th><td></td></tr>
            <tr><th>Bordering Countries</th><td></td></tr>
          </tbody>
          </table>

        </Col>

      </Row>



      <Row> <Weather city='Bridgetown'></Weather></Row>



    </>)}
    </Container >)

    ;
}

export default CountriesSingle;
