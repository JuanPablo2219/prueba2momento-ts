const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001; // Puedes cambiar el puerto según tus preferencias

app.use(express.json());

app.get('/get-horoscope/daily', async (req, res) => {
    try {
        const { sign, day } = req.query;
        const apiUrl = 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=libra&day=2023-12-22        ';

        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener el horóscopo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor intermedio iniciado en el puerto ${PORT}`);
});
