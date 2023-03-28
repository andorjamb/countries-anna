import React, { useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Button from 'react-bootstrap/Button';
import '../customStyles/CustomCard.css';



const CustomCard = ({ country }) => {




  function countryLink() {

  }

  return (
    <>

      <Card className="h-100">
        <Card.Img variant="top" src={country.flags.svg} alt="flag" className="flags" style={{ objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{country.name.common}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{country.name.official}</Card.Subtitle>

          <ListGroup>

            <ListGroupItem>Capital: {country.capital}</ListGroupItem>
            <ListGroupItem>Population: {country.population.toLocaleString()}</ListGroupItem>

          </ListGroup>

          {/*     Languages: {Object.values(country.languages).map((lang) => (`${lang}, `))} */}

          <Button variant="link" onClick={countryLink} className="btn btn-outline-primary">See More</Button>
          <Card.Link href='/' >See More</Card.Link>
        </Card.Body>

      </Card >



    </>

  );
};

export default CustomCard;