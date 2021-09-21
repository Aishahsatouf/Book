import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';
import Logo from '../../../images/logo.png'
import Form from '../../Form';
import '../../../styles/search.css';
import Random from './random';
function Search() {
  return (
    <section  id="search">
      <Row>
        <Col xs={12}>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Row>
            <Col xs={6}>
            <section className="hero">
          <div id="header">
         <img id="logo" style={{width:"30%" , height:"20%"}}src={Logo}/>
           </div>  
                <div className="hero-header">
           <h1 className="hero-title">This is your personl online library</h1>
           <p>Seamless access to all forms of academic literature in one place!</p>

<p>An affordable, vast collection of scientific journals, e-books and magazines with no download limits.</p>
          </div>
          <div className="hero-footer">
          <Form/>
          </div>
          </section>
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