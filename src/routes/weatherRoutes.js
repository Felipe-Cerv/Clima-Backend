const { Router } = require('express');
const { getWeather } = require('../controllers/weatherController');

const router = Router();

// Cuando alguien pida GET /api/v1/weather, llama al controlador
router.get('/clima', getWeather);

module.exports = router;