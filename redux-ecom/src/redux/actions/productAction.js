import ActionTypes from "../constants/action-types"

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const removeFromCart = (product) => {
    return {
        type: ActionTypes.DECREASE_QTY,
        payload: product
    }
}

export const removeProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: product
    }
}