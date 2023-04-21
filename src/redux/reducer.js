import { ADD_TO_CAR, DELETE_FROM_CAR } from "./actions"


const initialState = {
    carrito: []
}


const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CAR:
        return { ...state, carrito: [...state.carrito, action.payload] }

        case DELETE_FROM_CAR: 
        return { ...state, carrito: [...state.carrito.filter(phone => phone.id != action.payload)] }
        

        default:
        return { ...state }

    }
}


export default rootReducer;