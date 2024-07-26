import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bgImage1 from '../assets/img/bg-showcase-1.jpg'
import bgImage2 from '../assets/img/bg-showcase-2.jpg'
import bgImage3 from '../assets/img/bg-showcase-3.jpg'

// Extract a separate component for each section
function ShowcaseSection({ image, title, text, order }) {
  return (
    <Row className="g-0">
      <Col lg={6} className={`order-lg-${order} text-white showcase-img`}><img src={image}/></Col>
      <Col lg={6} className={`order-lg-${order === 2 ? 1 : 2} my-auto showcase-text`}>
        <h2>{title}</h2>
        <p className="lead mb-0">{text}</p>
      </Col>
    </Row>
  );
}

function Showcase() {
  return (
    <section className="showcase">
      <Container fluid className="p-0">
        <ShowcaseSection 
          image={bgImage1} 
          title="Fully Responsive Design" 
          text="When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!" 
          order={2}
        />
        <ShowcaseSection 
          image={bgImage2} 
          title="Updated For Bootstrap 5" 
          text="Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!" 
          order={1}
        />
        <ShowcaseSection 
          image={bgImage3} 
          title="Easy to Use & Customize" 
          text="Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!" 
          order={2}
        />
      </Container>
    </section>
  );
}

export default Showcase;