import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LinkContainer } from 'react-router-bootstrap';

import Login from '../components/Login';
import Register from '../components/Register';
import '../customStyles/Layout.css';

const Layout = () => {




  return (
    <Container fluid className="page">
      <Row className="navbar">
        <Navbar>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav>
                <Button>Sign In</Button>
                <LinkContainer to="/">
                  <Nav.Link className="navlink">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/countries">
                  <Nav.Link className="navlink">Countries</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favourites">
                  <Nav.Link className="navlink">Favourites</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
            {/* <h1 className="title align-bottom">Countries of the World</h1> */}
          </Container>
        </Navbar>
      </Row>
      <Row className="main">
        <Outlet />
      </Row>
      <Modal><Login></Login></Modal>
      <Modal><Register></Register></Modal>
    </Container>
  );
};

export default Layout;
