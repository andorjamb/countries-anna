import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { useGetAllCountriesQuery } from '../features/dataSlice.js';
import Weather from './Weather';
import '../customStyles/countriesSingle.css'

const CountriesSingle = () => {

  const countryName = Object.values(useParams())[0];
  const arrayZero = [];

  const imageSrc = `https://source.unsplash.com/500x400/?${countryName}`

  const {
    data: countries = [],
    isLoading,
    isFetching,
    error,
  } = useGetAllCountriesQuery();;

  countries.forEach((country) => {
    if (country.name.common === countryName) {
      arrayZero.push(country);
      if (arrayZero.length > 0) { return }
    }
  })
  console.log(arrayZero)


  return (

    <Container> {isLoading || isFetching ? (<>Loading....</>) : (<>
      <Row className="mt-1">
        <Col><img className="photo" src={imageSrc} alt={countryName} title={countryName}></img>
        </Col>
        <Col className="pt-5 ms-5">
          <h3 style={{ color: 'white' }}>{arrayZero[0].name.common}</h3>
          <table><tbody>
            <tr><th>Official Name</th><td>{arrayZero[0].name.official}</td></tr>
            <tr><th>Continent</th><td>{arrayZero[0].continents[0]}</td></tr>
            <tr><th>Region</th><td>{arrayZero[0].region}</td></tr>
            <tr><th>Sub-region</th><td>{arrayZero[0].subregion}</td></tr>
            <tr><th>Capital City</th><td>{arrayZero[0].capital}</td></tr>
            <tr><th>Languages</th><td>{Object.values(arrayZero[0].languages).join(', ')}</td></tr>
            <tr><th>Currency</th><td>{Object.values(arrayZero[0].currencies)[0].name}</td></tr>
            <tr><th>Bordering Countries</th><td>{arrayZero[0]?.borders.join(', ')}</td></tr>
          </tbody>
          </table>

        </Col>
      </Row>
      <Row>
      </Row>
      <Row className="mt-5"
      ><Col><Weather city={arrayZero[0].capital}></Weather>
        </Col>
        <Col><img src={arrayZero[0].coatOfArms.svg} alt='coat of arms' className="arms ms-5"></img>
        </Col>
      </Row>

    </>)}
    </Container >)

    ;
}

export default CountriesSingle;
