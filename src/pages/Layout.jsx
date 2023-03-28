import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Button, Row, Nav, Container, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';

import Login from '../components/Login';
import Register from '../components/Register';
import { auth } from '../app/auth/firestore';
import { showLogin } from '../features/modalSlice';
import '../customStyles/Layout.css';

const Layout = () => {

  const dispatch = useDispatch();
  const loginOpen = useSelector((state) => state.modal.loginOpen);

  const openLogin = () => {
    dispatch(showLogin(true));
  }

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <Container fluid className="page">
      <Login></Login>
      <Register></Register>
      <Row className="navbar">
        <Navbar>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Col>
                <Nav>

                  {!auth.currentUser ? (<Button onClick={openLogin} >Sign In</Button>) : (
                    <Button onClick={handleSignOut}>Sign Out</Button>
                  )}

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
              </Col>
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
