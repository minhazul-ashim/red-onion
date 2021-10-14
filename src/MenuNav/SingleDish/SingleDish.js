import React from 'react';
import { Col, Button } from 'react-bootstrap';
import './SingleDish.css'

const SingleDish = ({ dish }) => {

    const { name, id, img, price, shortDesc } = dish;
    return (
        <Col className='p-3 d-flex align-items-center dish-box'>
            <div className="dish-img-div w-50 mx-auto text-center">
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className='text-center'>
                <h6>{name}</h6>
                <p>{shortDesc}</p>
                <h4>$ {price}</h4>
                <Button variant='info' className='mt-2'>View Details</Button>
            </div>
        </Col>
    );
};

export default SingleDish;