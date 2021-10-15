import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Brand className='d-none d-sm-block'>
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">

                        <Nav.Link href="#home" className='mx-2'>{cartIcon}</Nav.Link>
                        <Nav.Link as={Link} to='/login' className='mx-2'>Login</Nav.Link>
                        <Nav.Link href="#link" className='mx-2'>
                            <Button variant='outline-primary'>Sign up</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;