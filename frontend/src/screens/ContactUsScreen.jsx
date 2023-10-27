import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUsScreen = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Contact Us</h2>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <p className="text-center">
            For more information, please read our{' '}
            <Link to="/terms">Terms and Conditions</Link>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsScreen;
