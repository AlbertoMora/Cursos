import React from 'react'


//En caso de usar useCallback no se puede aplicar memo a la exportación, tiene que ser a la función directamente.
const ShowIncrement =  React.memo( ({increment}) => {

    console.log("otra vez...");

    return (
        <>
          <button 
            onClick={() => {
                  increment(5)}
                } 
            className="btn btn-primary">+</button>  
        </>
    )
});

export default ShowIncrement;
