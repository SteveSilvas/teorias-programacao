const express = require('express');
const app = express();
const { useRoutes } = require('./src/app/app');
const { startServer } = require('./src/server/server');

useRoutes(app);

startServer(app, 3003);
