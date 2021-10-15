import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <div className="footer pt-5">
            <Container>
                <Row>
                    <Col className='col-6'>
                        <img src={logo} height='40px' alt="" />
                    </Col>
                    <Col className='col-3'>
                        <ul className='list-unstyled'>
                            <li>About Online Food</li>
                            <li>Read Our Blog</li>
                            <li>Sign Up to deliver</li>
                            <li>Add your restaurat</li>
                        </ul>
                    </Col>
                    <Col className='col-3'>
                        <ul className='list-unstyled'>
                            <li>Get Help</li>
                            <li>Read FAQs</li>
                            <li>View All Branches</li>
                            <li>Restaurants near you</li>
                        </ul>
                    </Col>
                </Row>
                <Row className='pt-3'>
                    <Col className='col-6'>
                        <p>&copy; Red Onion | 2021</p>
                    </Col>
                    <Col className='col-6'>
                        <ul className='d-flex list-unstyled justify-content-around text-right'>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Pricing</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;