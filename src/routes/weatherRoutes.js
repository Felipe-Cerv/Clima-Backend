const { Router } = require('express');
const { getWeather } = require('../controllers/weatherController');

const router = Router();

router.get('/clima', getWeather);

module.exports = router;