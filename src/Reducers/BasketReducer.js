const initialState = {basketData: 0};

export const BasketReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                basketData: initialState + action.payload
            }
        default:
            return state
    }
}

