import ActionTypes from "../constants/action-types"

const cart = []

const cartReducer = (state = cart, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_PRODUCT:
            const exists = state.find((item) => item.id === payload.id)
            if (exists) {
                return state.map((item) =>
                    item.id === payload.id ? { ...item, qty: item.qty + 1, totalPrice: item.price * (item.qty+1)} : item)
            } else {
                return [
                    ...state,
                    {
                        ...payload,
                        qty: 1,
                        totalPrice: payload.price
                    }
                ]
            }
        case ActionTypes.DECREASE_QTY:
            const productExists = state.find((item) => item.id === payload.id)
            if (productExists.qty === 1) {
                return state.filter((item) =>
                    item.id !== payload.id
                )
            } else {
                return state.map((item) =>
                    item.id === payload.id ? { ...item, qty: item.qty - 1, totalPrice: item.price * (item.qty-1) } : item
                )
            }
            case ActionTypes.REMOVE_PRODUCT:
            // const productExists = state.find((item) => item.id === payload.id)
            if (state.find((item) => item.id === payload.id)) {
                return state.filter((item) =>
                    item.id !== payload.id
                )
            }
            break;
        default:
            return state
    }
}

export default cartReducer;