import React from 'react';
import icon from '../images/icon.png'
import Store from "../Stores/Store";
import {add} from "../Actions/BasketAction";

const ProductComponent = ({name, price}) => {
    return (
        <div>
            <img src={icon} alt="gatsby logo" height="150"/>
            <div>
                <h4>{name}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                {price} €
            </div>

            <button onClick={() => Store.dispatch(add(price))}>
                add to basket
            </button>
        </div>
    );
}

export default ProductComponent;

