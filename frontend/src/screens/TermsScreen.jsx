import React from 'react';
import { Container } from 'react-bootstrap';

const TermsScreen = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Terms and Conditions</h2>
      <p>
        These terms and conditions outline the rules and regulations for the
        use of our website.
      </p>
      <p>
        By accessing this website, we assume you accept these terms and
        conditions. Do not continue to use our website if you do not agree to
        take all of the terms and conditions stated on this page.
      </p>
      <p>
        Please read our{' '}
        <a href="/privacy-policy" className="text-primary">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/refund-policy" className="text-primary">
          Refund Policy
        </a>{' '}
        as well.
      </p>
      <p>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: "Client", "You" and
        "Your" refers to you, the person accessing this website and accepting
        the Company's terms and conditions.
      </p>
      <h4>License</h4>
      <p>
        Unless otherwise stated, our website and/or its licensors own the
        intellectual property rights for all material on our website. All
        intellectual property rights are reserved. You may view and/or print
        pages from our website for your own personal use subject to restrictions
        set in these terms and conditions.
      </p>
      <h4>You must not:</h4>
      <ul>
        <li>Republish material from our website</li>
        <li>Sell, rent, or sub-license material from our website</li>
        <li>Reproduce, duplicate, or copy material from our website</li>
      </ul>
      {/* Add more terms and conditions content as needed */}
    </Container>
  );
};

export default TermsScreen;
