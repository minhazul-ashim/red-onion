import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    const { user, logOut } = useAuth();

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
                        {
                            !user ?
                                <div className='d-flex align-items-center'>
                                    <Nav.Link href="#link" className='mx-2'>
                                        <Button as={Link} to='/signup' variant='outline-primary'>Sign up</Button>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to='/login' className='mx-2'>Login</Nav.Link>
                                </div>
                                :
                                <div className="">
                                    <Button className='mx-2' onClick={logOut}>Log out</Button>
                                    <img width='40px' height='40px' className='rounded-circle' src={user.photoURL} alt="" />
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;