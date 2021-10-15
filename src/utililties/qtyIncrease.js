
const qtyIncrease = (prev, add) => {

    if (prev > 0 && add) {
        return prev + 1;
    } else if (prev > 0 && !add) {
        return prev - 1;
    } else {
        return prev;
    }
};

export default qtyIncrease;