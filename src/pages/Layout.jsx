import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Button, Row, Nav, Container, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';

import Login from '../components/Login';
import Register from '../components/Register';
import { auth } from '../app/auth/firestore';
import { showLogin } from '../features/modalSlice';
import '../customStyles/Layout.css';

const Layout = () => {

  const user = auth.currentUser;

  const dispatch = useDispatch();

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
      <Row className="p-2 signInBar"><Col>  {!auth.currentUser ? (<Button onClick={openLogin} >Sign In</Button>) : (
        <Button onClick={handleSignOut}>Sign Out</Button>
      )}</Col>
        <Col className="p-1">{user ? (<p style={{ textAlign: 'center' }} className="lead float-right">Welcome {user.displayName}</p>) : (<></>)}</Col>

      </Row>
      <Row className="navbar">
        <Navbar>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Col>
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

                </Nav>
              </Col>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row className="main ps-5 pe-5">
        <Outlet />
      </Row>

    </Container>
  );
};

export default Layout;
