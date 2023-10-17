// create me a footer with bootstrap modern porfessional
//

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
        <Container>
            <Row>
            <Col className="text-center py-3">
                <h5>Footer</h5>
            </Col>
            </Row>
        </Container>
        </footer>
    );
}

export default Footer;
