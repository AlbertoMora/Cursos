require('colors');
require('dotenv').config();

const { inquirerMenu, inquirerPause, readInput, listarLugares } = require('./helpers/inquirer');
const Search = require('./models/search');

console.clear();
const main = async () => {
    const search = new Search();
    let option = '';
    do {
        option = await inquirerMenu();

        switch (option) {
            case 1:
                const place = await readInput('Ciudad: ');

                const places = await search.getCity(place);

                const id = await listarLugares(places);
                if (id === 0) continue;

                const { name, lng, lat } = places.find(p => p.id === id);

                search.addHistory(name);

                const { desc, temp, max, min } = await search.getWeather(lat, lng);

                console.log('\nInformación de la Ciudad:\n'.green);
                console.log(
                    ` Ciudad: ${name},\n Lat: ${lat},\n Lng: ${lng},\n Temperatura: ${temp},\n Mínima: ${min},\n Máxima: ${max},\n Tiempo: ${desc}\n`
                );
                break;
            case 2:
                search.historial.forEach((place, i) => {
                    console.log(`${i + 1}. ${place}`);
                });
                break;
        }

        if (option !== 0) await inquirerPause();
    } while (option !== 0);
};

main();
