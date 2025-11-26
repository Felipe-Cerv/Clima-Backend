const express = require('express');
const weatherRoutes = require('./src/routes/weatherRoutes');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
// Usar las rutas
app.use('/api/v1', weatherRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});