import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    );
};

//Sirven para definir validaciones a las props
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
};

//Se puede hacer de esta forma, o estableciendo el valor por defecto directamente en la desestructuración
//La diferencia es que de esta forma llega como una propiedad en el objeto props y de la otra forma no.
PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
};

export default PrimeraApp;
