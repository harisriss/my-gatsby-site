import React from 'react';
import reduxStore from '../Stores/Store';
import {useSelector} from 'react-redux';
import {increment, decrement, reset} from '../Actions/CounterAction';

const CounterComponent = () => {
    const counterData = useSelector(state => state.CounterReducer.counterData);

    return (
        <div>
            <div>
                {counterData}
            </div>
            <div>
                <div>
                    <button onClick={() => reduxStore.dispatch(increment(counterData))}>
                        INCREMENT
                    </button>
                    <button onClick={() => reduxStore.dispatch(decrement(counterData))}>
                        DECREMENT
                    </button>
                    <button onClick={() => reduxStore.dispatch(reset(counterData))}>
                        RESET
                    </button>
                </div>
            </div>

        </div>
    );
}

export default CounterComponent;