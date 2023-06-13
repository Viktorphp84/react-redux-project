import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, set } from '../reducers/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleSetState = () => {
        dispatch(set(15));
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Увеличить</button>
            <button onClick={handleSetState}>Установить 15</button>
        </div>
    );
};

export default Counter;