import React from 'react';

const CounterUI = (props) => {
    const { count, handleIncrement, handleDecrement } = props
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <span>count: {count}</span>
        </div>
    )
}

export default CounterUI;