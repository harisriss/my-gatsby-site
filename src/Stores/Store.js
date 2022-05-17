import { createStore } from 'redux';
import reducers from '../Reducers/index';
//import {BasketReducer} from "../Reducers/BasketReducer";


const Store = createStore(reducers);
console.log("store",Store.getState())
export default Store;
