import React, { useMemo, useState } from 'react'
import {useCounter} from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

const MemoHook = () => {

    const [counter, increment] = useCounter(5000);
    const [show, setShow] = useState(true);

    const hardProcess = (iteraciones) => {
        
        for (let i = 0; i < iteraciones; i++) {
            console.log("Ahí vamos");
        }
        console.log(`${iteraciones} iteraciones realizadas`);
    }

    const memoHardProcess = useMemo(() => hardProcess(counter), [counter]);

    return (
        <>
            <h1>Memo Hook</h1>
            <h2>Counter: <small>{counter}</small> </h2>

            <hr />

            <p>{memoHardProcess}</p>

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

export default MemoHook
