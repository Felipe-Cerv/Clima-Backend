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

    }catch (error) {
        if (error.isWeatherApiError) {

            // Ciudad no encontrada
            if (error.code === 1006) {
                return res.status(404).json({
                    success: false,
                    errorCode: error.code,
                    msg: "Ciudad no encontrada"
                });
            }
            if (error.code === 2006 || error.code === 2007) {
                return res.status(401).json({
                    success: false,
                    errorCode: error.code,
                    msg: "Error con la clave API"
                });
            }

            // Otros errores de WeatherAPI
            return res.status(400).json({
                success: false,
                errorCode: error.code,
                msg: error.message
            });
        }
        return res.status(500).json({ 
            success: false,
            msg: "Error interno del servidor"
        });
    }
};

module.exports = { getWeather };