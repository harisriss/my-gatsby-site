import {combineReducers} from "redux";
import {BasketReducer} from "./BasketReducer";
import {CounterReducer} from "./CounterReducer";


export default combineReducers({
    CounterReducer,
    BasketReducer,
});