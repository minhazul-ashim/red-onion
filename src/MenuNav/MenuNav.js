import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './MenuNav.css'

const MenuNav = () => {

    return (
        <Container className='my-3'>
            <Nav variant="tabs" className='w-100 d-flex justify-content-center'>
                <Nav.Item>
                    <Nav.Link as={NavLink} to='/breakfast' show>
                        Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to='/lunch'>
                        Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to='/dinner' >
                        Dinner
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Container >
    );
};

export default MenuNav;