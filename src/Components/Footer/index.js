import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../images/logo2.png';
// import Copyrights from './Copyrights';
import { HashLink } from 'react-router-hash-link';
import '../../styles/footer.css';
import 'aos/dist/aos.css';
function Footer() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -40;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="" data-aos="fade-up" data-aos-duration="500">
                <Row>
                  <Col md={4}>
                    <div className="footer-logo">
                      <img
                        alt="footerlogo"
                        src={Logo}
                        className="img-fluid d-block"
                      />
                    </div>
                  </Col>
                  <Col md={{ span: 3, offset: 1 }}>
                    <div className="footer-menu">
                      <h3>Shortcuts</h3>
                      <ul>
                        <li>
                          <HashLink
                            scroll={(el) => scrollWithOffset(el)}
                            smooth
                            to="#search"
                          >
                            SEARCH
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            scroll={(el) => scrollWithOffset(el)}
                            smooth
                            to="#bestselling"
                          >
                             BEST SELLING
                          </HashLink>
                        </li>

                        <li>
                          <HashLink
                            scroll={(el) => scrollWithOffset(el)}
                            smooth
                            to="#pricing"
                          >
                             PRICING
                          </HashLink>
                        </li>
                        
                      </ul>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="footer-contact">
                      <h3>Contact Us</h3>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Copyrights /> */}
    </footer>
  );
}

export default Footer;