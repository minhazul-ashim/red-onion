import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../images/Image/adult-blur-blurred-background-687824.png';
import img2 from '../images/Image/chef-cook-food-33614.png';
import img3 from '../images/Image/architecture-building-city-2047397.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const Motivation = () => {

    const icon1 = <FontAwesomeIcon icon={faBus} />
    const icon2 = <FontAwesomeIcon icon={faBell} />

    return (
        <Container className='p-5'>
            <h2>Why Choose us</h2>
            <p className='lead'>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods. Boy properous increasing surrounded.</p>
            <Row xs={1} md={3} className='d-flex justify-content-center g-3'>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>{icon1} Fast Delivery</Card.Title>
                            <Card.Text>
                                Keep your systems sync with automated web hook based solutions notifications each time link is paid and how we dream about our future.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>{icon2} Auto Responder</Card.Title>
                            <Card.Text>
                                Keep your systems sync with automated web hook based solutions notifications each time link is paid and how we dream about our future.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>{icon1} Fast Delivery</Card.Title>
                            <Card.Text>
                                Keep your systems sync with automated web hook based solutions notifications each time link is paid and how we dream about our future.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Motivation;