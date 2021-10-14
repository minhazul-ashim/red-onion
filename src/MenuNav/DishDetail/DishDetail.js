import React from 'react';
import { useParams } from 'react-router';
import useFindDish from '../../hooks/useFindDish';

const DishDetail = () => {

    const { dishId } = useParams();

    const dish = useFindDish(dishId);

    console.log(dish);

    if (!dish) {
        return <div className="">Waiting</div>
    } else {
        return <div>{dish?.name}</div>
    }
};

export default DishDetail;