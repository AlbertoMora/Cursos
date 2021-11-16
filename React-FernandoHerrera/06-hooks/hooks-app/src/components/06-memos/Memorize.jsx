import React, { useState } from 'react'

import {useCounter} from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import Small from './Small';

const Memorize = () => {

    const [counter, increment] = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Memorize</h1>
            <h2>Counter: <Small value={counter} /></h2>

            <hr />

            <button onClick={() => increment(1)} className="btn btn-primary">+</button>

            <button 
                onClick={() => {
                    setShow(!show);
                }} className="btn btn-primary ml-3"
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    )
}

export default Memorize
