import React from 'react'
import '../../styles/main.css';
import { Container, Row, Col } from 'react-bootstrap';

function Main() {
  return (
      <>
     <section id="banner" className="banner">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="banner-text" id="hero">
              <h2>We Will Provide You With All The Books You Need </h2>
              <h4>A room without books is like a body without a soul</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Main;