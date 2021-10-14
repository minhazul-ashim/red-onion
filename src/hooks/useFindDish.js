import useDishes from './useDishes';

const useFindDish = (id) => {

    const dishes = useDishes('allDishes');

    const dish = dishes.find(dish => dish.id === id);

    return dish;
};

export default useFindDish;