import React, { useMemo } from "react";
import HeroCard from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../../selectors/getHeroByName";

const SearchScreen = ({ history }) => {
    const { search } = useLocation();
    const { q } = queryString.parse(search);
    const [{ searchText }, handleInputChange] = useForm({ searchText: q });

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleInputChange}
                            name="searchText"
                            autoComplete="off"
                            placeholder="find your hero"
                            className="form-control"
                        />
                        <button type="submit" className="btn btn-outline-primary">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-6">
                    <h4>Results: </h4>

                    {
                        (q==='' || !q) &&
                        <div className="alert alert-info animate__animated animate__fadeIn">Buscar un Héroe</div>
                    }

                    {
                        (q !== '' && q) && heroesFiltered.length === 0 &&
                        <div className="alert alert-warning animate__animated animate__shakeX">No hay coincidencias con el nombre {q}</div>
                    }

                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchScreen;
