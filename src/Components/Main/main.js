import React from 'react'
import '../../styles/main.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom'

function Main() {
  return (
      <>
     <section id="banner" className="banner">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="banner-text" id="hero">
              <h2>Better Solutions For Your Business</h2>
              <h4>A room without books is like a body without a soul</h4>
              <div className="banner-btn">
              {/* <Link to="/signin">Get Started</Link> */}
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Main;