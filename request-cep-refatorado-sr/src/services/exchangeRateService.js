const axios = require('axios');

async function getExchangeRate(baseCurrency, apiKey) {
    const url = `https://v6.exchangeratesapi.io/latest?base=${baseCurrency}&apikey=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar cotação de moedas');
    }
}

module.exports = { getExchangeRate };
