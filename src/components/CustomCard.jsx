import React, { useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

import { addFavourite, removeFavourite } from '../features/userSlice';
import '../customStyles/CustomCard.css';



const CustomCard = ({ country }) => {

  const dispatch = useDispatch();
 /*  const favourites = useSelector(state => state.user.favourites);
  console.log('favourites:', favourites); */


  function countryLink() {

  }

  return (
    <>

      <Card className="h-100">
      {/*   {favourites.includes(country.name.common) ? (
          <i
            className="bi bi-heart-fill text-danger m-1 p-1"
            onClick={() =>
              dispatch(removeFavourite(country.name.common))
            }
          ></i>
        ) : (
          <i
            className="bi bi-heart text-danger m-1 p-1"
            onClick={() =>
              dispatch(addFavourite(country.name.common))
            }
          ></i>
        )} */}
        <Card.Img variant="top" src={country.flags.svg} alt="flag" className="flags h-50" style={{ objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{country.name.common}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{country.name.official}</Card.Subtitle>

          <ListGroup>

            <ListGroupItem>Capital: {country.capital}</ListGroupItem>
            <ListGroupItem>Population: {country.population.toLocaleString()}</ListGroupItem>

          </ListGroup>

          <Card.Link href={`/countries/${country.name.common}`}>See More</Card.Link>
        </Card.Body>

      </Card >



    </>

  );
};

export default CustomCard;