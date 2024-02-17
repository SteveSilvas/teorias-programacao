const axios = require('axios');

async function getCep(cep) {
    const urlViaCep = `http://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await axios.get(urlViaCep);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar CEP');
    }
}

module.exports = { getCep };
