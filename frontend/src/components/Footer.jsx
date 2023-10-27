import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import the Font Awesome icons
import logo from '../assets/logo.png';


const Footer = () => {
  return (
    <footer className="footer bg-primary text-light py-4">
  <Container>
    <Row className="align-items-center">
      <Col md={6} className="text-md-start text-center mb-3 mb-md-0">
        
        <h2 className="text-light">About JUMPSTART <img  className="logo-img" src={logo} alt="50" width="50" height="50"/></h2>
        <p>
          Learn more about our company and what we do. We are dedicated to providing high-quality services and products to our customers.
        </p>
      </Col>
      <Col md={6} className="text-md-end text-center py-5 px-10">
        <div className="social-icons py-3">
          <a href="/" className="text-light me-3" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="/" className="text-light me-3" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="/" className="text-light me-3" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <Link to="/about" className="btn btn-outline-light">Read More</Link>
        
      </Col>
    </Row>
  </Container>
</footer>

   
  );
};

export default Footer;
