import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';
import Form from '../../Form';
import '../../../styles/search.css';
import Random from './random';
function Search() {
  return (
    <section style={{  padding:" 80px 0"}} id="search">
      <Row>
        <Col xs={12}>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Row>
            <Col xs={6}>
            <div className="search" >
                 <Form/>
                </div>
              </Col>
              <Col xs={6}>
                <Random/>
              </Col>
              
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default  Search;