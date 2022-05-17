import React from 'react';
import {useSelector} from "react-redux";

const BasketValueComponent = () => {
    const basket = useSelector(state => state.BasketReducer.basketData);
    const count = useSelector(state => state.CounterReducer.counterData);
    return (
        <div>
            <div>
                basket : {basket}
            </div>
            <div>
                counter : {count}
            </div>
        </div>
    );
}

export default BasketValueComponent;