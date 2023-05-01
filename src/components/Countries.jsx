import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

import { useGetAllCountriesQuery } from '../features/dataSlice.js';
import CustomCard from './CustomCard.jsx';

const Countries = () => {

  const [search, setSearch] = useState('');
  const {
    data: countries = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetAllCountriesQuery();;

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
  }

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  return (
    <Container fluid>

      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <Form>
            <Form.Control
              style={{ width: '18rem' }}
              type="search"
              className="me-2 "
              placeholder="Search for country by name"
              aria-label="Search"
              onChange={searchHandler}
            />
          </Form>
        </Col>
      </Row>

      <Container>
        <Row className="mt-5 h-20 row-h-300" xs={1} md={2} lg={3} >

          {countries?.filter((item) => { return item.name.common.toLowerCase().includes(search.trim().toLowerCase()) }).map((country) => (<Col key={country.name.common} className="md-3 mt-5">
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
