import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import shoppingIllu from '../assets/image-styles/shopping-illu.png';

const AboutMe = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">OUR VALUES🌍</h2>
          <p className="text-center" style={{ padding: 5 }}>
            <b>Jumpstart eCommerce</b> is a <strong>dynamic and innovative company</strong> dedicated to
            delivering <strong>high-quality and authentic fashion products</strong> to our valued
            customers. We believe in the power of style to inspire <strong>confidence</strong> and
            <strong>creativity</strong> in every individual. Our commitment extends to:
          </p>
          <ul className="text-center">
            <li>Exceptional Customer Care: Our customer-centric approach ensures that you receive the best support, timely responses, and assistance in your shopping journey.✔️</li>
            <li>Sophisticated User-Centered Design: Our e-commerce platform is meticulously designed with a user-centric focus, providing a seamless and intuitive shopping experience.✔️</li>
            <li>High-Quality Products: We curate only the finest fashion products, guaranteeing authenticity and top-notch quality in every purchase.✔️</li>
          </ul>

          <p className="text-center">
            Our CEO, Jhonn Vincent Arcipe, leads our passionate team in the pursuit of
            excellence. With a strong commitment to quality, we curate fashion
            collections that meet the highest standards and elevate your
            wardrobe.
          </p>

          <h3 className="  text-lg-center mt-4" style={{ padding: 20 }}>Testimonials 💯</h3>
          <Row>
            <Col>
              <Card className="testimonial-card text-center">
                <Card.Body>
                  <Card.Text>
                    "Jumpstart eCommerce has changed the way I shop for fashion.
                    Their products are top-notch, and the customer service is
                    exceptional." - Zedrick Emmanuel Zafra
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="testimonial-card text-center">
                <Card.Body>
                  <Card.Text>
                    "I've never been more satisfied with my fashion choices.
                    Jumpstart eCommerce delivers on quality and style." - Ezekiel Lucena
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
            <Col className="d-flex align-items-center p-xxl-5">
              <img className="illustration-image-shopping" src={shoppingIllu} alt="Payment Illustration" />
            </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
