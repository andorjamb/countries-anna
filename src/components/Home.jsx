import { Carousel, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import images from '../assets/images';
import '../customStyles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Row>
        <Col>
          <div className="info-container"><Card id="info">
            <Card.Body>
              <Card.Text>'Countries' is a simple React application made as an end-of-term assignment at
                Business College Helsinki. The app makes use of {' '}
                <a href="https://restcountries.com/">https://restcountries.com/ </a> and{' '}
                <a href="https://openweathermap.org/">https://openweathermap.org/</a> APIs.</Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Col>
        <Col>
          <Carousel className='home-carousel' slide="true">
            {images.map((image) => (
              <Carousel.Item className='.carousel-item'>
                <img src={image} className="d-block w-100 home-carousel" alt="country" />
              </Carousel.Item >
            ))}
            {/*       <Carousel.Item className='.carousel-item'>
              <img src={images[0]} className="d-block w-100 home-carousel" alt="Norwegian mountain" />
            </Carousel.Item >
            <img src={images[1]} className="d-block w-100 home-carousel" alt="Namibian desert" />
            <Carousel.Item className='.carousel-box'>
              <img src={images[2]} className="d-block w-100" alt="Boat in Japan" />
            </Carousel.Item>
            <Carousel.Item className='.carousel-box'></Carousel.Item> */}
          </Carousel>
        </Col>
      </Row>






    </div >
  );
};

export default Home;
