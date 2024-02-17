const axios = require('axios');

async function getWeather(city, apiKey) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar previsão do tempo');
    }
}

module.exports = { getWeather };
