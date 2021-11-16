import React, { useState } from 'react'

import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

const ReactExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    }

    return (
        <>
            <h1>RealExapleRef</h1>
            <hr />
            <button onClick={handleToggle} className="btn btn-primary mt-5">
               Show/Hide
            </button>
            
           { show && <MultipleCustomHooks /> }

           <hr />

           
        </>
    )
}

export default ReactExampleRef
