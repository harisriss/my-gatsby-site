const initialState = {counterData: 9};

export const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counterData: action.payload + 1

            }
        case 'DECREMENT':
            return {
                ...state,
                counterData: action.payload - 1
            }
        case 'RESET' :
            return {
                ...state,
                counterData: 0
            }
        default:
            return state
    }
}