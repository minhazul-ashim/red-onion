const getPlate = () => {

    localStorage.getItem('plate')
}

const addToPlate = (id) => {

    const exists = getPlate();

    let plate = {};

    if (!exists) {
        plate[id] = 1;
    } else {
        plate = JSON.parse(exists);
        if (plate[id]) {
            const newQty = plate[id] + 1;
            plate[id] = newQty;
        } else {
            plate[id] = 1;
        }
    }
    updatePlate(plate)
}

const updatePlate = (plate) => {

    const stringified = JSON.stringify(plate);
    localStorage.setItem('plate', stringified)
}

const removeFromPlate = (id) => {

    const exists = getPlate();
    if (!exists) {

    } else {
        const plate = JSON.parse(exists);
        delete plate[id];
        updatePlate(plate)
    }
}

const getStoredPlate = () => {

    const exists = getPlate();
    return exists ? JSON.parse(exists) : {}
}

const clearPlate = () => {

    localStorage.removeItem('plate')
}

export { addToPlate, removeFromPlate, clearPlate, getStoredPlate }