import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CustomCard from './CustomCard.jsx';

const Countries = ({ filterCriteria }) => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);


  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
    let countryFilter = countries.filter((country) =>
      country.name.common.includes(search.trim().toLowerCase())
    );
    this.setState({ displayCities: countryFilter });
  };

  //let countries = rtk query fetch


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data))
  }, [])

  useEffect(() => { console.log(countries); }, [countries])


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
