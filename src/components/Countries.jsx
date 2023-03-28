import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CustomCard from './CustomCard.jsx';
import { setSearch, useGetAllCountriesQuery } from '../features/countriesSlice.js';

const Countries = ({ filterCriteria }) => {
  //const [search, setSearch] = useState('');
  //filterCritera<string || string[]>

  const dispatch = useDispatch();
  //const search = useSelector(state => state.countries.search);
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);

  const bla = useGetAllCountriesQuery()


  console.log(bla)

  const searchHandler = (e) => {
    dispatch(setSearch(e.target.value));
    /*     console.log(search);
        let countryFilter = countries.filter((country) =>
          country.name.common.includes(search.trim().toLowerCase())
        );
        this.setState({ displayCities: countryFilter }); */
  };

  //let countries = rtk query fetch

  /* 
    useEffect(() => {
      axios.get("https://restcountries.com/v3.1/all")
        .then((res) => setCountries(res.data))
    }, []) */

  useEffect(() => { console.log(countries[0]); }, [countries])


  return (
    <Container fluid>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <Form>
            <Form.Control
              style={{ width: '18rem' }}
              type="search"
              className="me-2 "
              placeholder="Search for countries"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </Col>
      </Row>

      <Container>
        <Row className="mt-5 h-20 row-h-300" xs={1} md={2} lg={3} >
          {countries.map((country) => (<Col className="md-3 mt-5">
            <CustomCard country={country} />
          </Col>
          ))
          }
        </Row>

      </Container>
    </Container >
  );
};

export default Countries;
