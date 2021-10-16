
const qtyIncrease = (prev, add) => {

    if (prev >= 1 && add) {
        return prev + 1;
    } else if (prev >= 2 && !add) {
        return prev - 1;
    } else {
        return 1
    }
};

export default qtyIncrease;

