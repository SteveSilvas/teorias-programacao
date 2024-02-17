const express = require('express');
const router = express.Router();
const { getExchangeRate } = require('../services/exchangeRateService');

router.get('/', async (req, res) => {
    const baseCurrency = req.query.base;
    const apiKey = 'YOUR_API_KEY_HERE'; // Substitua com sua chave

    try {
        const data = await getExchangeRate(baseCurrency, apiKey);
        res.json(data);
    } catch (error) {
        console.error('Erro:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
