const weatherService = require('../services/weatherService');

const getWeather = async (req, res) => {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({ error: "Falta el parámetro 'city'" });
        }

        // Llama al servicio (la lógica real)
        const data = await weatherService.getWeatherByCity(city);
        
        res.status(200).json({ success: true, data });

    } catch (error) {
        // Manejo de errores
        res.status(500).json({ success: false, msg: error.message });
    }
};

module.exports = { getWeather };