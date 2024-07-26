import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import image from '../assets/img/bg-masthead.jpg';

function CallToAction() {
  const [emailAddress, setEmailAddress] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add your API token here
    const apiToken = 'YOUR_API_TOKEN';

    // Make API call to submit the form
    fetch(`https://api.startbootstrap.com/solution/contact-forms/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        email: emailAddress,
      }),
    })
     .then((response) => response.json())
     .then((data) => {
        if (data.success) {
          setSubmitSuccess(true);
        } else {
          setSubmitError(true);
        }
      })
     .catch((error) => {
        setSubmitError(true);
      });
  };

  return (
    <section className="call-to-action text-white text-center" id="signup" style={{ backgroundImage: `url(${image})` }}>
      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col xl={6}>
            <h2 className="mb-4">Ready to get started? Sign up now!</h2>
            <Form className="form-subscribe" onSubmit={handleFormSubmit}>
              <Row>
                <Col xl={9}>
                  <Form.Control type="email" placeholder="Email Address" value={emailAddress} onChange={handleInputChange} required />
                </Col>
                <Col auto>
                  <Button variant="primary" type="submit">Submit</Button>
                </Col>
              </Row>
              {submitSuccess && (
                <div className="text-center mb-3">
                  <div className="fw-bolder">Thank you for submitting the form!</div>
                </div>
              )}
              {submitError && (
                <div className="text-center text-danger mb-3">Error sending message!</div>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CallToAction;