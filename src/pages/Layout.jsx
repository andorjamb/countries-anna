import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../customStyles/Layout.css';
import Login from '../components/Login';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Layout = () => {




  return (
    <Container fluid className="page">
      <Row className="navbar">
        <Navbar>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav>
                <LinkContainer to="/">
                  <Nav.Link className="navlink">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/countries">
                  <Nav.Link className="navlink">Countries</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favourites">
                  <Nav.Link className="navlink">Favourites</Nav.Link>
                </LinkContainer>
                <Button>Sign In</Button>
           

              </Nav>    
            </Navbar.Collapse>
           <h1 className="title align-bottom">Countries of the World</h1>
           </Container>
        </Navbar>
      </Row>
      <Row className="main">
        <Outlet />
      </Row>
      <Modal><Login></Login></Modal>
    </Container>
  );
};

export default Layout;
