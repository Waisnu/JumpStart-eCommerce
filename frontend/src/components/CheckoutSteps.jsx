import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>
              Sign In <span role="img" aria-label="hand-emoji">🔥</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            Sign In {step1 && <span role="img" aria-label="hand-emoji">🔥</span>}
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>
              Shipping {step2 && <span role="img" aria-label="hand-emoji">🔥</span>}
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            Shipping {step2 && <span role="img" aria-label="hand-emoji">🔥</span>}
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>
              Payment {step3 && <span role="img" aria-label="hand-emoji">🔥</span>}
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            Payment {step3 && <span role="img" aria-label="hand-emoji">🔥</span>}
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>
              Place Order {step4 && <span role="img" aria-label="hand-emoji">🔥</span>}
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            Place Order {step4 && <span role="img" aria-label="hand-emoji">🔥</span>}
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
