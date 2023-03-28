import React, { useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

import { addFavourite, removeFavourite } from '../features/userSlice';
import '../customStyles/CustomCard.css';


const CustomCard = ({ country }) => {

  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites);

  const ADD = (e) => {
    dispatch(addFavourite(country.name.common))
    console.log(country.name.common)
  }

  const REMOVE = () => {
    dispatch(removeFavourite(country.name.common))
  }


  return (
    <>

      <Card className="h-100">



        <Card.Img variant="top" src={country.flags.svg} alt="flag" className="flags h-50" style={{ objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{country.name.common}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{country.name.official}</Card.Subtitle>
          <i className="bi bi-heart-fill text-danger m-1 p-1" onClick={ADD}></i>

          <i className="bi bi-heart text-danger m-1 p-1" onClick={REMOVE}></i>
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