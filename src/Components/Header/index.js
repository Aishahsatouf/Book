import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import Form from'../Form'
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo2.png';
import '../../styles/header.css'

function Header() {
    const [headerState, setHeaderState] = useState('beforeScroll');
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -40;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
      };
      const handleScroll = () => {
        if (window.pageYOffset > 60) {
          if (headerState === 'beforeScroll') {
            setHeaderState('afterScroll');
            
          }
        } else {
          if  (headerState=== 'afterScroll') {
            setHeaderState('beforeScroll'); 
          }
        }
      };
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      });
    
 return (
     <>
     <div className={headerState} id="myHeader">
     <Navbar fixed="top" expand="sm" >
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="header-logo" className="img-fluid"  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#banner"
                className="nav-link"
              >
                MAIN
              </HashLink>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#search"
                className="nav-link"
              >
                SEARCH
              </HashLink>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#bestselling"
                className="nav-link"
              >
                BEST SELLING
              </HashLink>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#pricing"
                className="nav-link"
              >
                PRICING
              </HashLink>
              
            </Nav>
          </Navbar.Collapse>
    <Form/>
        </Container>
      </Navbar>
     </div> 
      </>
  );
}

export default Header;