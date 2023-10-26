import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logos from "../assets/news.png";
import { LinkContainer } from 'react-router-bootstrap'

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>

           <LinkContainer to='/'>
          <Navbar.Brand>
            <img src={logos} alt="JumpStart" /> 
            JumpStart
            </Navbar.Brand>
            </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="ms-auto">
       
       <LinkContainer to='/cart'>
            <Nav.Link >
              <FaShoppingCart /> Cart
            </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
            <Nav.Link >
              <FaUser /> Sign In
            </Nav.Link>
            </LinkContainer>

            
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
