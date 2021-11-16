const fs = require('fs');
const axios = require('axios');

const mapboxToken = process.env.MAPBOX_TOKEN;
const owToken = process.env.OW_TOKEN;

class Search {
    historial = [];
    dbPath = './src/db/database.json';

    constructor() {
        this.loadDB();
    }

    get mapboxParams() {
        return {
            access_token: mapboxToken,
            limit: 5,
            language: 'es',
        };
    }

    get openWeatherParams() {
        return {
            appId: owToken,
            units: 'metric',
            lang: 'es',
        };
    }

    async getCity(place) {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.mapboxParams,
            });

            const {
                data: { features },
            } = await instance.get();

            return features.map(f => ({
                id: f.id,
                name: f.place_name,
                lng: f.center[0],
                lat: f.center[1],
            }));
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getWeather(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: `http://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.openWeatherParams, lat, lon },
            });

            const {
                data: { main, weather },
            } = await instance.get();

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
            };
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    addHistory(place) {
        if (this.historial.includes(place)) {
            return;
        }
        this.historial.unshift(place);
        this.saveDB();
    }

    saveDB() {
        const payload = {
            historial: this.historial,
        };
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    loadDB() {
        const payload = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
        const { historial } = JSON.parse(payload);
        this.historial = !!historial ? historial : this.historial;
    }
}

module.exports = Search;
