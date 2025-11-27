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

        return {
            location: {
                city: rawData.location.name,
                region: rawData.location.region,
                country: rawData.location.country,
                localtime: rawData.location.localtime,
                timezone: rawData.location.tz_id,
                lat: rawData.location.lat,
                lon: rawData.location.lon
            },

            current: {
                temp_c: rawData.current.temp_c,
                feelslike_c: rawData.current.feelslike_c,
                condition_text: rawData.current.condition.text,
                condition_icon: rawData.current.condition.icon,
                wind_kph: rawData.current.wind_kph,
                wind_dir: rawData.current.wind_dir,
                humidity: rawData.current.humidity,
                pressure_mb: rawData.current.pressure_mb,
                cloud: rawData.current.cloud,
                visibility_km: rawData.current.vis_km
            },

            forecast: {
                max_temp_c: rawData.forecast.forecastday[0].day.maxtemp_c,
                min_temp_c: rawData.forecast.forecastday[0].day.mintemp_c,
                sunrise: rawData.forecast.forecastday[0].astro.sunrise,
                sunset: rawData.forecast.forecastday[0].astro.sunset
            }
        };


    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            const apiErr = error.response.data.error;
            throw {
                isWeatherApiError: true,
                code: apiErr.code,
                message: apiErr.message
            };
        }
        throw {
            isWeatherApiError: false,
            code: 500,
            message: "Error interno obteniendo el clima"
        };
    }
};

module.exports = { getWeatherByCity };