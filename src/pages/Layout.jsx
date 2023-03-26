import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';

import '../customStyles/Layout.css';
import { Col } from 'react-bootstrap';

const Layout = () => {
  return (
    <Container fluid className="page">
      <Row className="navbar">
        <Navbar>
          <Container className="justify-content-end">
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
                <h1 className="title">Countries of the World</h1>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row className="main">
        <Outlet />
      </Row>
    </Container>
  );
};

export default Layout;
