const express = require('express');
const router = express.Router();
const { getCep } = require('../services/cepService');

router.get('/', async (req, res) => {
    const cep = req.query.cep;
    console.log(cep, "xeep");
    try {
        const data = await getCep(cep);
        res.json(data);
    } catch (error) {
        console.error('Erro:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
