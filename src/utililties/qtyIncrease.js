
const qtyIncrease = (prev, add) => {

    if (add) {
        return prev+1;
    } else {
        return prev-1;
    }
};

export default qtyIncrease;