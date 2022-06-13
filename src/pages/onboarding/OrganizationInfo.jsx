import '../../styles/onboarding.css';
import PractitionerNavBar from './PractitionerNavBar'
import React from 'react'
import {  Button, Row, Col,  Nav, FloatingLabel, Form, ProgressBar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const OrganizationInfo = () => {
  const percentage = 64

  return (
    <>
      <section className='onboarding border-green-start'>
        <div className='container-fluid '>
        <header>
            <PractitionerNavBar />
            <ProgressBar now={percentage} />
        </header>   
        <Row className='vh-100'>
          <Col md="2" className='g-0 side-menu-bg' >

  <Nav defaultActiveKey="/home" className="flex-column side-menu" as='ul'>
  <Nav.Item className='display-7 f-play-fair navTitle'> About you </Nav.Item>
  <Nav.Item as="li" >
  <NavLink  to='/practitioner' >Personal info <label>Provide your personal info</label></NavLink>
  </Nav.Item>
  <Nav.Item as="li">
  <NavLink to='/addressinfo'>Address <label>Provide your address info</label></NavLink>
  </Nav.Item>
  <Nav.Item as="li">
  <NavLink to='/practitionerinfo'>Practitioner info <label>Provide your practitioner info</label></NavLink>
  </Nav.Item>
  <Nav.Item as="li" className='NavLinkActive'>
  <NavLink to='/organizationinfo'>Organization info <label>Provide your organization info</label></NavLink>
  </Nav.Item>
</Nav>
          </Col>
          <Col md={10}>
          <form className='form-controller mt-5'>
          <Row className="g-2 mb-5">
  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="First name*">
      <Form.Control type="text" placeholder="First name*" />
    </FloatingLabel>
  </Col>
  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Last name*">
      <Form.Control type="text" placeholder="Last name*" />
    </FloatingLabel>
  </Col>

  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Gender identity">
      <Form.Select aria-label="Floating label select example">
        <option>Select</option>
        <option value="1">Female</option>
        <option value="2">Male</option>
        <option value="3">Self-Identify</option>
      </Form.Select>
    </FloatingLabel>
  </Col>
</Row>

<Row className="g-2 mb-5">
  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Email*">
      <Form.Control type="email" placeholder="Email*" />
    </FloatingLabel>
  </Col>
  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="Mobile*">
      <Form.Control type="tel" placeholder="Mobile*" />
    </FloatingLabel>
  </Col>
  <Col md> </Col>
</Row>
<Row className='flex-column text-center align-items-center'>    
  <Col xs> <Button className='shadow-orange btn rounded-pill btn-orange p-3 w-25 mt-5'>Save and Continue</Button></Col>
</Row>
          </form>
          </Col>
        </Row>


          </div>
      
      </section>

    </>
  );
};

export default OrganizationInfo; 