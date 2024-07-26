import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiWindowAlt } from "react-icons/bi";
import { BiLayer } from "react-icons/bi";
import { BiTerminal } from "react-icons/bi";

// Extract a separate component for each feature item
function FeatureItem({ icon, title, text }) {
  return (
    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
      <div className="features-icons-icon d-flex">{icon}</div>
      <h3>{title}</h3>
      <p className="lead mb-0">{text}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="features-icons bg-light text-center">
      <Container>
        <Row>
          <Col lg={4}>
            <FeatureItem 
              icon={<BiWindowAlt className="m-auto text-primary" size={75} />} 
              title="Fully Responsive" 
              text="This theme will look great on any device, no matter the size!" 
            />
          </Col>
          <Col lg={4}>
            <FeatureItem 
              icon={<BiLayer className="m-auto text-primary" size={75} />} 
              title="Bootstrap 5 Ready" 
              text="Featuring the latest build of the new Bootstrap 5 framework!" 
            />
          </Col>
          <Col lg={4}>
            <FeatureItem 
              icon={<BiTerminal className="m-auto text-primary" size={75} />} 
              title="Easy to Use" 
              text="Ready to use with your own content, or customize the source files!" 
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;