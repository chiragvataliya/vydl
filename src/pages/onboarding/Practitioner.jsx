import '../../styles/onboarding.css';
import PractitionerNavBar from './PractitionerNavBar'
import React, { useState } from 'react'
import { Modal, Button, Row, Col, Container, Nav, FloatingLabel, Form, ProgressBar, } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Practitioner = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  const percentage = 25
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
  <Nav.Item as="li" className='NavLinkActive'>
  <NavLink  to='/practitioner' >Personal info <label>Provide your personal info</label></NavLink>
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
  <Col xs> 
  <Link to='/addressinfo'> <Button className='shadow-orange btn rounded-pill btn-orange p-3 w-25 mt-5'>Save and Continue</Button></Link>
 </Col>
</Row>
          </form>
          </Col>
        </Row>


            <Modal
              size="lg"
              show={show}
              onHide={handleClose}
              aria-labelledby="contained-modal-title-vcenter "
              centered
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body className="show-grid">
                <Container >
                  <Row>
                    <Col xs={12} className='flex-column h-100 text-center align-items-center'>
                      <div className='display-5 f-play-fair lh-sm '>Welcome to <br />Tutorial for Practitioners</div>
                      <div className='h4 mt-5 txt-orange'>Become a Practitioner in few easy steps</div>
                      <div className='ts-4 mb-3 '>Join us. We'll help you every step of the way</div>

                    </Col>
                    <Col xs={12} >
                      <div className='video-cta bg-green-lt rounded-4 p-3 mb-4   clearfix '>
                        <div className='float-start video-cta-img shadow'></div>
                        <div className='float-end h6 text-center me-2 mt-4 pt-3'>Play the Tutorial</div>
                      </div>
                    </Col>
                    <Col xs={12} className='flex-column h-100 text-center align-items-center mb-4'>
                      <div className='mb-4 fs-5'>Or</div>
                      <Button className='shadow-orange btn rounded-pill btn-orange p-3  w-25 mb-3'>Dive in</Button>
                    </Col>


                  </Row>
                </Container>
              </Modal.Body>

            </Modal>
          </div>
      
      </section>

    </>
  );
};

export default Practitioner; 