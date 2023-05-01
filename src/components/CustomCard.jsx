import React, {useRef} from 'react';
import { Card, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { addFavourite, removeFavourite } from '../features/userSlice';
import '../customStyles/CustomCard.css';

const CustomCard = ({ country }) => {

  const dispatch = useDispatch();
  const heartIcon = useRef();

 // const heartIcon = document.getElementById();

  const handleIconClick = (e) => {
    heartIcon.current.classList.toggle('fa-regular');
    heartIcon.current.classList.toggle('fa-solid');
    if (e.target.checked) {
      console.log('checked') //debugging
      dispatch(addFavourite(country.name.common));
    }
    else {
      console.log('not checked'); //debugging
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
              <div> <i className="fa-heart fa-regular" ref={heartIcon} 
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