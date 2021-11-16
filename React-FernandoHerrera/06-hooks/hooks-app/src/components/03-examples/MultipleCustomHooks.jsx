import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {

    const [counter, increment] = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];
    
    return (
        <>
            <h1>Quotes</h1>
            <hr />

        {
            loading ? 

                <div className="alert alert-info text-center">
                    Loading...
                </div>
            :
                <blockquote className="blockquote">
                    <p className="quote-text">{quote}</p>
                    <footer className="blockquote-footer">
                        {author}
                    </footer>
                </blockquote>
        }

        <button onClick={() => increment(1)} className="btn btn-primary">
            Next Quote
        </button>
        </>
    )
}

export default MultipleCustomHooks
