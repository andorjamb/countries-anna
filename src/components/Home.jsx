import { Carousel, Row, Col, Card, Container } from 'react-bootstrap';
import React from 'react';
import images from '../assets/images';
import '../customStyles/Home.css';

const Home = () => {

  return (
    <Container className="home-container">
      <Row className="mt-1 ms-5 h-80">
        <Col sm={12} md={5} lg={5}>
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
        <Col sm={12} md={6} lg={6} className="me-auto">
          <Carousel className='home-carousel' slide="true">
            {images.map((image) => (
              <Carousel.Item className='.carousel-item' key={image.alt}>
                <img src={image.file} className="d-block w-100 home-carousel" alt={image.alt} title={image.alt} />
              </Carousel.Item >
            ))}
            <Carousel.Item className='.carousel-box'></Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={0} md={1} lg={1} className="h-100"><h1 className="title">Countries of the World</h1></Col>

      </Row>
      <Row><div className="sup-div"></div></Row>






    </Container >
  );
};

export default Home;
