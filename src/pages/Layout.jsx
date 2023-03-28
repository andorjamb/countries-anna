import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Login from '../components/Login';
import Register from '../components/Register';
import { showLogin } from '../features/modalSlice';
import '../customStyles/Layout.css';

const Layout = () => {

  const dispatch = useDispatch();
  const loginOpen = useSelector((state) => state.modal.loginOpen);
  const registerOpen = useSelector((state) => state.modal.registerOpen);


  const openLogin = () => {
    dispatch(showLogin(true));
    console.log(loginOpen);
  }
  /* 
    const closeModal = () => {
      dispatch(showLogin(false))
    } */
  //data-bs-target='#login'

  return (
    <Container fluid className="page">
      <Login></Login>
      <Register></Register>
      <Row className="navbar">
        <Navbar>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav>
                <Button onClick={openLogin} >Sign In</Button>
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
