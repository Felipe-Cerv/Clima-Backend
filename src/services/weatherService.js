const axios = require('axios');
require('dotenv').config();

const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get('http://api.weatherapi.com/v1/forecast.json', {
            params: {
                key: process.env.API_KEY,
                q: city,
                days: 1,
                aqi: 'no',
                alerts: 'no',
                lang: 'es'
            }
        });
        const rawData = response.data;
        console.log("response", response);
        // AQUÍ formateamos los datos para cumplir tus requisitos
        return {
            location: {
                city: rawData.location.name,
                country: rawData.location.country,
                localtime: rawData.location.localtime
            },
            current: {
                temp_c: rawData.current.temp_c,
                condition: rawData.current.condition.text,
                // ... resto de campos mapeados
            },
            forecast: {
                max: rawData.forecast.forecastday[0].day.maxtemp_c,
                min: rawData.forecast.forecastday[0].day.mintemp_c
            }
        };

    } catch (error) {
        throw new Error("Error obteniendo datos del clima");
    }
};

module.exports = { getWeatherByCity };