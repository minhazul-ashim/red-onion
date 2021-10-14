import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuNav = () => {
    return (
        <Container className='my-3'>
            <Nav variant="pills" defaultActiveKey="/home" className='w-100 d-flex justify-content-center'>
                <Nav.Item>
                    <Nav.Link as={Link} to='/breakfast'>
                        Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to='/lunch'>
                        Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to='/dinner' >
                        Dinner
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Container >
    );
};

export default MenuNav;