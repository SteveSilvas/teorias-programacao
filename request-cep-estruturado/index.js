const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.get('/', (req, res) => {
    let cep = req.query.cep;
    let urlViaCep = `http://viacep.com.br/ws/${cep}/json/`;

    axios.get(urlViaCep)
        .then(response => {
            console.log(response.data);
            res.json(response.data); 
        })
        .catch(error => {
            console.error('Erro:', error.message);
            res.status(500).json({ error: 'Erro ao buscar CEP' });
        });
});

app.get('/weather', async (req, res) => {
    try {
        const city = req.query.city;
        const apiKey = 'YOUR_API_KEY_HERE';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Erro:', error.message);
        res.status(500).json({ error: 'Erro ao buscar previsão do tempo' });
    }
});

app.get('/exchange-rate', async (req, res) => {
    try {
        const baseCurrency = req.query.base;
        const apiKey = 'YOUR_API_KEY_HERE';
        const url = `https://v6.exchangeratesapi.io/latest?base=${baseCurrency}&apikey=${apiKey}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Erro:', error.message);
        res.status(500).json({ error: 'Erro ao buscar cotação de moedas' });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
