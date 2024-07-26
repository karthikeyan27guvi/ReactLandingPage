import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import testMonial1 from '../assets/img/testimonials-1.jpg';
import testMonial2 from '../assets/img/testimonials-2.jpg';
import testMonial3 from '../assets/img/testimonials-3.jpg';

function Testimonials() {
  const testimonials = [
    {
      image: testMonial1,
      name: 'Margaret E.',
      quote: 'This is fantastic! Thanks so much guys!',
    },
    {
      image: testMonial2,
      name: 'Fred S.',
      quote: 'Bootstrap is amazing. I\'ve been using it to create lots of super nice landing pages.',
    },
    {
      image: testMonial3,
      name: 'Sarah W.',
      quote: 'Thanks so much for making these free resources available to us!',
    },
  ];

  return (
    <section className="testimonials text-center bg-light">
      <Container>
        <h2 className="mb-5">What people are saying...</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col key={index} lg={4}>
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <h5>{testimonial.name}</h5>
                <p className="font-weight-light mb-0">{testimonial.quote}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;