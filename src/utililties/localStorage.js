const getPlate = () => {

    return localStorage.getItem('plate')
}

const addToPlate = (id, qty) => {

    const db = JSON.parse(getPlate());

    if (!db) {
        let plate = {};
        plate[id] = qty
        return updatePlate(plate)
    } else {
        if (id in db) {
            db[id] = db[id] + qty;
        } else {
            db[id] = qty
        }
    }
    updatePlate(db)
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