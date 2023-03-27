import React from 'react';
import { Card } from 'react-bootstrap';


import Button from 'react-bootstrap/Button';

const CustomCard = ({ country }) => {
  return (
    <>
      <style type="text/css">
        {` 
        .card {
            background-color: var(--peach);
            color: black;
            height: 350px;
            width: auto;
            margin: 1rem;
         
          }
        
        `}
      </style>

      <Card>
        <Card.Img variant="top" src={country.flags.svg} alt="flag" />
        <Card.Body>
          <Card.Title>{country.name.common}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{country.name.official}</Card.Subtitle>
          <Card.Text>
            Capital: {country.capital}
            Population: {country.population}
            {/*     Languages: {Object.values(country.languages).map((lang) => (`${lang}, `))} */}
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>

      </Card>



    </>

  );
};

export default CustomCard;