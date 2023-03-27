import React, { useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Button from 'react-bootstrap/Button';
let languages = [];
const CustomCard = ({ country }) => {

  //const languages = Object.values(country.languages);
  //console.log(languages);
  useEffect(() => {
    if (country.languages != null) {
      languages = Object.values(country.languages);
      console.log(languages);
    }

  }, [country])


  function countryLink() {

  }

  return (
    <>
      <style type="text/css">
        {`
       
        
        `}
      </style>

      <Card className="card-h-100">
        <Card.Img variant="top" src={country.flags.png} alt="flag" className="img-h-50" />
        <Card.Body>
          <Card.Title>{country.name.common}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{country.name.official}</Card.Subtitle>

          <ListGroup>

            <ListGroupItem>Capital: {country.capital}</ListGroupItem>
            <ListGroupItem>Population: {country.population}</ListGroupItem>
            <ListGroupItem>Languages:
              {languages.map((lang) => `${lang}, `)}

            </ListGroupItem>
          </ListGroup>

          {/*     Languages: {Object.values(country.languages).map((lang) => (`${lang}, `))} */}

          <Button variant="link" onClick={countryLink}>See More</Button>
        </Card.Body>

      </Card >



    </>

  );
};

export default CustomCard;