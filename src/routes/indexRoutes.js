const express = require('express');
const indexRouter = express.Router();

const sensorRoutes = require('./sensorRoutes');
const userRoutes = require('./userRoutes');

indexRouter.use(sensorRoutes);
indexRouter.use(userRoutes);

module.exports = indexRouter;