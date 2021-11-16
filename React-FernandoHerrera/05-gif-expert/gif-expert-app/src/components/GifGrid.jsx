import React from "react";
import PropTypes from 'prop-types';

import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import 'animate.css';

const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem {...img} key={img.id} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;
