import React, { useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  arrayRemove,
  arrayUnion
} from "@firebase/firestore";

import { addFavourite, removeFavourite, setLoggedIn } from '../features/userSlice';
import '../customStyles/CustomCard.css';
import { db } from '../app/auth/firestore';



const CustomCard = ({ country }) => {

  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites);
  const loggedIn = useSelector(state => state.loggedIn);

  const ADD = (e) => {
    dispatch(addFavourite(country.name.common))
    if (loggedIn) {


    }
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
          <i className="bi bi-heart-fill text-danger m-1 p-1" style={{ fontSize: '1.8rem', cursor: 'pointer' }} onClick={ADD}></i>

          <i className="bi bi-heart text-danger m-1 p-1" onClick={REMOVE}></i>
          <ListGroup>

            <ListGroupItem>Capital: {country.capital}</ListGroupItem>
            <ListGroupItem>Population: {country.population.toLocaleString()}</ListGroupItem>

          </ListGroup>

          <Button > <Card.Link style={{ margin: 'auto', padding: '5px' }} href={`/countries/${country.name.common}`}>See More</Card.Link></Button>
        </Card.Body>

      </Card >



    </>

  );
};

export default CustomCard;