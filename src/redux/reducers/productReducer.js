<<<<<<< HEAD
import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
        case ActionTypes.FETCH_PRODUCTS:
                return {...state,products:payload}
        
        default:
            return state
    }
}
export const selectedProduct = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,...payload}
        
        default:
            return state
    }
}

=======
import {ActionTypes} from "../constants/action-types"

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
            case ActionTypes.FETCH_PRODUCTS:
                return {...state,products:payload}
        default:
            return state
    }
}

export const selectedProduct = (state ={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,...payload}
        default:
            return state
    }
}
>>>>>>> 8000d6aefee7ac732088c8e588acff330cae9e04
