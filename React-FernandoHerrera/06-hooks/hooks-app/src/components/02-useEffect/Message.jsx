import React, { useEffect } from 'react'

const Message = ({name}) => {

    useEffect(() => {
        
        const mouseMove = (e) => {
            const {x, y} = e;
            console.log(x, y);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mouseover', mouseMove);
        }
    }, []);

    return (
        <>
            <h1>Eres Genial {name}</h1>;
        </>
    );
}

export default Message;
