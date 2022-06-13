import '../../styles/onboarding.css';
import  Vydl from '../../assets/images/vydl.png'

import { Navbar, Nav, Container, Badge, } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
const PractitionerNavBar= () => { 

  return (
    <>
<Navbar className='practitionerNavbar' collapseOnSelect expand="lg" >
  <Container fluid className="g-0">
  <Navbar.Brand to="/" className='w-250px'><img src={Vydl} width='120px' alt='---' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" / >
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="me-auto main-nav" >
      <NavLink  to='/practitioner'><Badge pill className='bg-orange-dk'>1</Badge> Personal info </NavLink>
      <NavLink  to='/addressinfo'><Badge pill className='bg-orange-dk'>2</Badge> Address info </NavLink>
      <NavLink  to='/practitionerinfo'><Badge pill className='bg-orange-dk'>3</Badge> Practitioner info </NavLink>
      <NavLink  to='/Organizationinfo'><Badge pill className='bg-orange-dk'>4</Badge> Organization info</NavLink>
    </Nav>
    <Nav>
      <Nav.Link >
      <div className='video-cta-sm bg-green-lt rounded-4 p-1 clearfix '>
      <div className='float-start video-cta-sm-img shadow'></div>
      <div className='float-end text-center m-2 pt-2'>Play the Tutorial</div>
                      </div></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  );
};

export default PractitionerNavBar; 