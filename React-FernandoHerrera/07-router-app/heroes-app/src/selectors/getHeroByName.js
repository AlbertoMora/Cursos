import { heroes } from "../data/Heroes";

export const getHeroByName = (name) => {
    if (name === "" || !name) {
        return [];
    }

    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name.toLowerCase()));
};
