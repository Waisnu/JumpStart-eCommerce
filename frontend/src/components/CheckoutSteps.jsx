import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import gif from '../assets/check.gif';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      {step1 && (
        <Nav.Item>
          <LinkContainer to='/login'>
            <Nav.Link>
              Sign In <img src={gif} alt="Check" />
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      )}

      {step2 && (
        <Nav.Item>
          <LinkContainer to='/shipping'>
            <Nav.Link>
              Shipping <img src={gif} alt="Check" />
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      )}

      {step3 && (
        <Nav.Item>
          <LinkContainer to='/payment'>
            <Nav.Link>
              Payment <img src={gif} alt="Check" />
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      )}

      {step4 && (
        <Nav.Item>
          <LinkContainer to='/placeorder'>
            <Nav.Link>
              Place Order <img src={gif} alt="Check" />
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      )}
    </Nav>
  );
};

export default CheckoutSteps;
