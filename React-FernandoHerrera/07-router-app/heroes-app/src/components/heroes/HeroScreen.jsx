import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectors/getHeroById";

//import image from '../../assets/heroes/dc-superman.jpg'; import para trabajar imágenes estáticas

const HeroScreen = ({ history }) => {
    const { heroId } = useParams();
    
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    if (!hero) {
        return <Redirect to="/" />;
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    const handleReturn = () => {
        if(history.length <=2){
            history.push('/')
        }else{
            history.goBack();
        } 
    };

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    // src={`../assets/heroes/${heroId}.jpg`} //Forma de trabajarlo desde /public/assets
                    // src={image} //Forma de trabajar imágenes estáticas por medio de import
                    src={heroImages(`./${heroId}.jpg`).default}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance:</b> {first_appearance}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {publisher}
                    </li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Regresar
                </button>
            </div>
        </div>
    );
};

export default HeroScreen;
