import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

import '../02-useEffect/effects.css';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback((num) => {
        setCounter( c => c + num );
    }, [setCounter]);

    return (
        <>
            <h1>Callback Hook: { counter }</h1>

            <ShowIncrement increment={increment} />
        </>
    )
}

export default CallbackHook
