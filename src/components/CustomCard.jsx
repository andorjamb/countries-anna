import React from 'react';
import { Card, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';


import { addFavourite, removeFavourite } from '../features/userSlice';
import '../customStyles/CustomCard.css';


const CustomCard = ({ country }) => {

  const dispatch = useDispatch();




  const toggleFave = (e) => {
    dispatch(addFavourite(country.name.common));
    /*   e.target.classList.remove('bi-heart');
      e.target.classList.add('bi-heart-fill');*/

  }



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
            onClick={() => dispatch(addFavourite(country.name.common))}
          ></i>

          <i
            className="active bi bi-heart text-danger m-1 p-1"
            style={{ fontSize: '1.8rem', cursor: 'pointer' }}
          ></i>
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