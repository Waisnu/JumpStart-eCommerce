import { useState, useEffect } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../slices/cartSlice';
import paymentIllu from '../assets/image-styles/payment-illu.png';
import { Link } from 'react-router-dom';

const PaymentScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [navigate, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Row>
        {/* Column for the illustration */}
        <Col md={6} className="text-center">
          <img className="illustration-image-payment" src={paymentIllu} alt="Payment Illustration" />
        </Col>

        {/* Column for the form */}
        <Col md={6}>
          <h1 className="text-center">Payment Method</h1>

          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label as="legend" className="text-center">
                Select Method
              </Form.Label>
              <Col className="text-center">
                <Form.Check
                  className="my-2"
                  type="radio"
                  label="PayPal or Credit Card"
                  id="PayPal"
                  name="paymentMethod"
                  value="PayPal"
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
              </Col>
            </Form.Group>

            <Button type="submit" variant="primary" className="d-block mx-auto mt-3">
              Continue
            </Button>

            <div className="text-center mt-3">
              <a href="https://pastes.dev/yXb0ObHYmt" target="_blank" style={{ padding: '5px' }}>
                👉 PAYPAL DEMO ACCOUNT 👈
              </a>
            </div>
          </Form>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default PaymentScreen;
