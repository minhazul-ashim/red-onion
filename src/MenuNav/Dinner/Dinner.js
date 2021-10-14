import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDishes from '../../hooks/useDishes';
import SingleDish from '../SingleDish/SingleDish';

const Dinner = () => {
    const dishes = useDishes('dinner');
    console.log(dishes)

    if (!dishes) {
        return <div></div>
    } else {
        return (
            <>
                <Container className='mx-auto my-4'>
                    <Row xs={1} md={2} lg={3} className='w-100 gy-3'>
                        {
                            dishes.map(dish => {

                                return <SingleDish dish={dish} key={dish.id}></SingleDish>
                            })
                        }
                    </Row>
                </Container>
            </>
        )
    }
};

export default Dinner;