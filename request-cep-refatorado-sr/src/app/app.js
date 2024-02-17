const cepRoute = require('../routes/cepRouter');
const weatherRoute = require('../routes/weateherRoute');
const exchangeRateRoute = require('../routes/exchangeRateRoute');

const useRoutes = (app) => {
    app.use('/cep', cepRoute);
    app.use('/weather', weatherRoute);
    app.use('/exchange-rate', exchangeRateRoute);
};

module.exports = { useRoutes };
