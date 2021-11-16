import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {

    const [counter, increment, decrement, reset] = useCounter();

    return (
        <>
            <h1>
                Counter with Hook: { counter }
                <hr />
                <button onClick={ () =>  increment(2) } className="btn btn-primary">+1</button>
                <button onClick={ reset } className="btn btn-secondary">Reset</button>
                <button onClick={ () => decrement(2) } className="btn btn-secondary">-1</button>
            </h1>
        </>
    )
}

export default CounterWithCustomHook
