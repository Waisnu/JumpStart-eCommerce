import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer bg-primary text-light py-4">
      
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center mb-3 mb-md-0">
            <h2 className="text-light">About JUMPSTART <img className="logo-img" src={logo} alt="50" width="50" height="50" /></h2>
            <p>
              At JUMPSTART, we're dedicated to delivering high-quality, authentic fashion products. Our commitment to excellence ensures you receive the finest in style. Explore our collections and elevate your wardrobe with confidence.
            
            </p>
          </Col>
          <Col md={6} className="text-md-end text-center py-5">
            <div className="social-icons py-3">
              <a href="/" className="text-light me-3" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="/" className="text-light me-3" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="/" className="text-light me-3" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="/" className="text-light me-3" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
            <Link to="/aboutus" className="btn btn-outline-light">About Us</Link>
          </Col>
          <Col md={12} className="text-center ">
            <ul className="list-inline">
              <li className="list-inline-item"><Link to="/aboutus" className="text-light text-decoration-none">About ⭐</Link></li>
              <li className="list-inline-item"><Link to="/terms" className="text-light text-decoration-none">Terms and Conditions ⭐ </Link></li>
              <li className="list-inline-item"><Link to="/contactus" className="text-light text-decoration-none">Contact Us ⭐</Link></li>
              <li className="list-inline-item"><Link to="https://pastes.dev/6QE9fchgae" target="_blank" className="text-light text-decoration-none">Demo Accounts</Link></li>
            </ul>
          </Col>
         
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
