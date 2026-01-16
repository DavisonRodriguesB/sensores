const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/SensorController');

router.put('/sensor/:id', sensorController.update);
router.delete('/sensor/:id', sensorController.delete);

module.exports = router;