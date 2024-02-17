const express = require('express');
const router = express.Router();
const { getWeather } = require('../services/weatherService');

router.get('/', async (req, res) => {
    const city = req.query.city;
    const apiKey = 'YOUR_API_KEY_HERE'; // Substitua com sua chave

    try {
        const data = await getWeather(city, apiKey);
        res.json(data);
    } catch (error) {
        console.error('Erro:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
