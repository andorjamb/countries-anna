import { Carousel, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import images from '../assets/images';
import '../customStyles/Home.css';

const Home = () => {

  return (
    <div className="home-container">
      <Row className="justify-content-around">
        <Col>
          <div className="info-container">
            <Card className="info">
              <Card.Body>
                <Card.Title>About</Card.Title>
                <Card.Text>'Countries' is a simple React application made as an end-of-term assignment at
                  Business College Helsinki. The app makes use of
                  <a href="https://restcountries.com/"> REST countries </a> and
                  <a href="https://openweathermap.org/"> Open Weather Map </a> APIs.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col>
          <Carousel className='home-carousel' slide="true">
            {images.map((image) => (
              <Carousel.Item className='.carousel-item' key={image.alt}>
                <img src={image.file} className="d-block w-100 home-carousel" alt={image.alt} title={image.alt} />
              </Carousel.Item >
            ))}
            <Carousel.Item className='.carousel-box'></Carousel.Item>
          </Carousel>
        </Col>
      </Row>






    </div >
  );
};

export default Home;
