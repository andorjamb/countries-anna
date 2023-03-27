import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import Card from 'react-bootstrap/Card';
import Card from './Card.jsx';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';


const Countries = ({filterCriteria}) => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);


  //let countries = rtk query fetch
  console.log("Search: ", search)

useEffect(() => {
      axios.get("https://restcountries.com/v3.1/all")
        .then((res) => setCountries(res.data))
    }, []) 

  //const countries = [];

  useEffect(()=>{  console.log(countries);},[countries])


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
 <Container>   <Row xs={2} md={3} lg={4} className=" g-3">
        <Col className="mt-5"> 

          {countries.map((country) => (<Card country={country}></Card> 
           
                       
         )  
               
            )

          }

      </Col>
      </Row> </Container>
   
    </Container>
  );
};

export default Countries;
