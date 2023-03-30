import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateDoc,
  doc,
  setDoc,
  arrayRemove,
  arrayUnion
} from "@firebase/firestore";

/* import { addFavourite, removeFavourite, setLoggedIn } from '../features/userSlice'; */
import '../customStyles/CustomCard.css';
import { auth, db } from '../app/auth/firestore';
import { async } from '@firebase/util';

const CustomCard = ({ country }) => {

  // const dispatch = useDispatch();
  //const favourites = useSelector(state => state.favourites);
  //const loggedIn = useSelector(state => state.loggedIn);
  //const [faveArray, setFaveArray] = useState([]);


/* 
  const toggleFave = (e) => { }
  const ADD = (e) => { */
    // dispatch(addFavourite(country.name.common))
  /*   e.target.classList.remove('bi-heart');
    e.target.classList.add('bi-heart-fill');
    console.log('before add:', faveArray)
    setFaveArray(faveArray => [...faveArray, country.name.common]);

    console.log('check name', country.name.common)
    console.log('after add:', faveArray)
  }

  const REMOVE = () => {
    setFaveArray(faveArray => faveArray.filter((country) => country !== country.name.common));
    console.log('after remove:', faveArray);
  } */

  /*  useEffect(() => {
 
     console.log('in useEffect', faveArray);
   }, [faveArray]) */


  useEffect(() => {
    // if (loggedIn || auth.currentUser) {
    /*   setDoc(doc(db, 'favourites', `${auth.currentUser.uid}`),
        { favourites: [] }, { merge: true }); */
    // }
  }, [])

  useEffect(() => {
    // if (loggedIn || auth.currentUser) {

    /*       updateDoc(doc(db, 'favourites', `${auth.currentUser.uid}`), { favourites: arrayUnion(`${country.name.common}`) })
    
          updateDoc(doc(db, 'favourites', `${auth.currentUser.uid}`),
            { favourites: arrayRemove(`${country.name.common}`) }); */

    // }
  }, [])



  return (
    <>

      <Card className="h-100">

        <Card.Img variant="top" src={country.flags.svg} alt="flag" className="flags h-50" style={{ objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{country.name.common}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{country.name.official}</Card.Subtitle>
          <i
            className="no-display bi bi-heart-fill text-danger m-1 p-1"
            style={{ fontSize: '1.8rem', cursor: 'pointer' }}
           ></i>
          {/* 
          <i
            className="active bi bi-heart text-danger m-1 p-1"
            style={{ fontSize: '1.8rem', cursor: 'pointer' }}
            onClick={REMOVE}></i> */}
          <ListGroup>
            <ListGroupItem>Capital: {country.capital}</ListGroupItem>
            <ListGroupItem>Population: {country.population.toLocaleString()}</ListGroupItem>
          </ListGroup>
          <Row className="justify-content-center" >
            <Card.Link className="mt-2 ms-5"
              href={`/countries/${country.name.common}`}
            >
              <Button className="p-2 mt-2"  >See More</Button>
            </Card.Link></Row>

        </Card.Body>

      </Card >
    </>

  );
};

export default CustomCard;