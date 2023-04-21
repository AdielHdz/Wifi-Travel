export const ADD_TO_CAR = "ADD_TO_CAR";
export const DELETE_FROM_CAR = "DELETE_FROM_CAR";

export const addToCar = (phoneDetails) => {
    return { type: ADD_TO_CAR, payload: phoneDetails }
}

export const deleteFromCar = (id) => {
    return { type: DELETE_FROM_CAR, payload: id }
}
