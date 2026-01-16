const sensorFile = require('../utils/userFile');

class SensorService {

  getAll() {
    return sensorFile.read();
  }

  updateSensor(id, novosDados) {
    const sensores = sensorFile.read();

    const index = sensores.findIndex(sensor => sensor.id === Number(id));

    if (index === -1) {
      throw new Error('Sensor não encontrado');
    }

    sensores[index] = {
      ...sensores[index],
      ...novosDados
    };

    sensorFile.write(sensores);
    return sensores[index];
  }

  deleteSensor(id) {
    const sensores = sensorFile.read();

    const novaLista = sensores.filter(
      sensor => sensor.id !== Number(id)
    );

    if (novaLista.length === sensores.length) {
      throw new Error('Sensor não encontrado');
    }

    sensorFile.write(novaLista);
    return { mensagem: 'Sensor removido com sucesso' };
  }
}

module.exports = new SensorService();