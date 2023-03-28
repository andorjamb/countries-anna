import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import CustomCard from './CustomCard.jsx';
import { setCountryStore } from '../features/countriesSlice';

const Countries = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const countryStore = useSelector((state) => state.countryStore);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    let countryFilter = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.trim().toLowerCase())
    );
    setFilteredCountries(countryFilter);

  }, [search])


  useEffect(() => {
    const fetchCountries = () => axios.get("https://restcountries.com/v3.1/all")
      .then((response) => response.data).then((data) => setCountries(data));

    fetchCountries();

  }, [])

  useEffect(() => {
    dispatch(setCountryStore(countries));
    console.log('local state', countries);
  }, [countries])

  useEffect(() => {

    console.log('store state', countryStore);


  }, [countryStore])



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
          {filteredCountries.map((country) => (<Col key={country.name.common} className="md-3 mt-5">
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
