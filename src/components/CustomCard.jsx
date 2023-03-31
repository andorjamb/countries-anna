import React from 'react';
import { Card, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


import { addFavourite, removeFavourite } from '../features/userSlice';
import '../customStyles/CustomCard.css';


const CustomCard = ({ country }) => {

  const dispatch = useDispatch();
  const heartIcon = document.getElementById(`fave_${country.name.common}`);

  const handleIconClick = (e) => {
    console.log('clicked')
    heartIcon.classList.toggle('fa-regular');
    heartIcon.classList.toggle('fa-solid');
    if (e.target.checked) {
      console.log('checked')
      dispatch(addFavourite(country.name.common));
    }
    else {
      console.log('not cheecked');
      dispatch(removeFavourite(country.name.common))
    }
  }

  return (
    <>
      <Card className="h-100">
        <Card.Img variant="top" src={country.flags.svg} alt="flag" className="flags h-50" style={{ objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{country.name.common}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{country.name.official}</Card.Subtitle>
          <Row className="justify-content-between" style={{ justifyContent: 'space-between' }}>

            <label className="fave"><input type="checkbox" onClick={handleIconClick} />
              <div> <i className="fa-heart fa-regular" id={`fave_${country.name.common}`}
              ></i></div>

            </label>
          </Row>

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