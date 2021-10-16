import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartDetail from './CartDetail/CartDetail';
import DeliveryForm from './DeliveryForm/DeliveryForm';

const Cart = () => {


    return (
        <div>
            <Container className='p-5'>
                <Row md={1} lg={2}>
                    <Col>
                        <DeliveryForm></DeliveryForm>
                    </Col>
                    <Col>
                        <CartDetail></CartDetail>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;