import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

const LayoutEffect = () => {

    const [counter, increment] = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];
    const [boxSize, setBoxSize] = useState({})
    const pTag = useRef();

    useLayoutEffect(() => {
        if(pTag.current){
            setBoxSize(pTag.current.getBoundingClientRect());
        }
    }, [quote]);


    return (
        <>
            <h1>Layout Effect</h1>
            <hr />

        {
            loading ? 

                <div className="alert alert-info text-center">
                    Loading...
                </div>
            :
                <blockquote className="blockquote">
                    <p ref={pTag}>{quote}</p>
                    <footer className="blockquote-footer">
                        {author}
                    </footer>
                </blockquote>
        }

        <pre>
            {JSON.stringify(boxSize, null, 3)}
        </pre>
        <button onClick={() => increment(1)} className="btn btn-primary">
            Next Quote
        </button>
        </>
    )
}

export default LayoutEffect;
