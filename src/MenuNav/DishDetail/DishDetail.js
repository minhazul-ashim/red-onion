import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFindDish from '../../hooks/useFindDish';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import qtyIncrease from '../../utililties/qtyIncrease';
import { addToPlate } from '../../utililties/localStorage'


const DishDetail = () => {

    const addIcon = <FontAwesomeIcon icon={faPlus} />
    const delIcon = <FontAwesomeIcon icon={faMinus} />

    const { dishId } = useParams();

    const [qty, setQty] = useState(1);

    const dish = useFindDish(dishId);

    const handleDecrease = () => {

        setQty(qtyIncrease(qty, false))
    }

    const handleIncrease = () => {

        setQty(qtyIncrease(qty, true))
    }

    if (!dish) {
        return <div className="">Waiting</div>
    } else {
        return (
            <Container className='d-flex flex-column flex-md-row align-items-center p-5'>
                <div className="dish-info p-5">
                    <h4>{dish.name}</h4>
                    <p className="lead">{dish.detail}</p>
                    <h3>${dish.price * qty}</h3>

                    <div className="my-4">

                        <Button variant='outline-secondary' onClick={handleDecrease}>{delIcon}</Button>
                        <h4 className='d-inline mx-3'>{qty}</h4>
                        <Button variant='outline-secondary' onClick={handleIncrease}>{addIcon}</Button>
                        <br />
                    </div>

                    <Button onClick={() => addToPlate(dishId, qty)} variant='danger'>Add to plate</Button>

                </div>
                <div className='dish-img'>
                    <img className='img-fluid' src={dish.img} alt="" />
                </div>

            </Container>
        )
    }
};

export default DishDetail;