const sensorService = require('../services/SensorService');

class SensorController {

  update(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;

      const sensorAtualizado = sensorService.updateSensor(id, dados);
      res.status(200).json(sensorAtualizado);

    } catch (error) {
      res.status(404).json({ erro: error.message });
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;

      const resposta = sensorService.deleteSensor(id);
      res.status(200).json(resposta);

    } catch (error) {
      res.status(404).json({ erro: error.message });
    }
  }
}

module.exports = new SensorController();