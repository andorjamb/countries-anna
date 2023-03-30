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
    if (country.name.common === countryName) {
      arrayZero.push(country);
      if (arrayZero.length > 0) { return }
    }
  })
  console.log(arrayZero)


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
      <Row className="mt-1">
        <Col><img className="photo" src={imageSrc} alt={countryName} title={countryName}></img>
        </Col>
        <Col className="pt-5 ms-2">
          <h3 style={{ color: 'white' }}>{arrayZero[0].name.common}</h3>
          <table><tbody>
            <tr><th>Official Name</th><td>{arrayZero[0].name.official}</td></tr>
            <tr><th>Continent</th><td>{arrayZero[0].continents[0]}</td></tr>
            <tr><th>Region</th><td>{arrayZero[0].region}</td></tr>
            <tr><th>Sub-region</th><td>{arrayZero[0].subregion}</td></tr>
            <tr><th>Languages</th><td>{Object.values(arrayZero[0].languages).join(', ')}</td></tr>
            <tr><th>Currency</th><td>{Object.values(arrayZero[0].currencies)[0].name}</td></tr>
            <tr><th>Bordering Countries</th><td>{arrayZero[0]?.borders}</td></tr>
          </tbody>
          </table>

        </Col>
      </Row>
      <Row>
      </Row>
      <Row className="mt-5"
      ><Col><Weather city='Bridgetown'></Weather>
        </Col>
        <Col><img src={arrayZero[0].coatOfArms.svg} alt='coat of arms' className="arms"></img>
        </Col>
      </Row>

    </>)}
    </Container >)

    ;
}

export default CountriesSingle;
