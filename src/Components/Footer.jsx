// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { BiFacebook, BiTwitter, BiInstagram } from 'react-icons/bi';
  
// function Footer() {
//   return (
//     <footer className="footer bg-light">
//       <Container>
//         <Row>
//           <Col lg={6} className="h-100 text-center text-lg-start my-auto">
//             <ul className="list-inline mb-2">
//               <li className="list-inline-item"><a href="#!">About</a></li>
//               <li className="list-inline-item">⋅</li>
//               <li className="list-inline-item"><a href="#!">Contact</a></li>
//               <li className="list-inline-item">⋅</li>
//               <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
//               <li className="list-inline-item">⋅</li>
//               <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
//             </ul>
//             <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
//           </Col>
//           <Col lg={6} className="h-100 text-center text-lg-end my-auto">
//             <ul className="list-inline mb-0">
//               <li className="list-inline-item me-4">
//                 <a href="#!"><BiFacebook className="fs-3" /></a>
//               </li>
//               <li className="list-inline-item me-4">
//                 <a href="#!"><BiTwitter className="fs-3" /></a>
//               </li>
//               <li className="list-inline-item">
//                 <a href="#!"><BiInstagram className="fs-3" /></a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer bg-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-3 mb-lg-0">
            <ul className="list-inline mb-2">
              <li className="list-inline-item"><a href="#!">About</a></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><a href="#!">Contact</a></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
            </ul>
            <p className="text-muted small mb-0">&copy; Your Website 2023. All Rights Reserved.</p>
          </Col>
          <Col lg={6} className="text-center text-lg-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-4">
                <a href="#!"><FaFacebook size={24} /></a>
              </li>
              <li className="list-inline-item me-4">
                <a href="#!"><FaTwitter size={24} /></a>
              </li>
              <li className="list-inline-item">
                <a href="#!"><FaInstagram size={24} /></a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;