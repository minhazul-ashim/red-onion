import React, { useState } from 'react';
import useFindDish from '../../hooks/useFindDish';
import { getStoredPlate } from '../../utililties/localStorage';

const CartDetail = () => {

    const plate = getStoredPlate();
    const [dishes, setDishes] = useState([]);

    

    return (
        <div>
            <p> From Lake City Center, Virginia Street</p>
            <p>Arrival: Within 30 minutes</p>
        </div>
    );
};

export default CartDetail;