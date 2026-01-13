import { readSensorFile, writeSensorFile } from "../utils/sensorFile.js";

class SensorService {

    async getAllSensor(){
        const sensores = await readSensorFile();
        return sensores;
    }

    // create
    async newSensor(data) {
        const { id, localizacao, temp } = data;
        //chama a lista de sensores
        const sensores = await readSensorFile();

        //verificar se o id foi passado
        if (!id) {
            throw new Error("ID obrigatório");
        }
        
        //verificar se o sensor já existe na lista    
        const sensorExists = sensores.find(sensor => sensor.id === id);
        if (sensorExists) {
            throw new Error("Sensor com este ID já existe");
        }

        //todos devem possuir mais de 4 caracteres
        if (id.length < 4) {
            throw new Error("ID deve possuir mais de 4 caracteres");
        }

        //montar o objeto
        const sensor = { id, localizacao, temp };
        sensores.push(sensor);
        await writeSensorFile(sensores);
        return sensor;
    }


    //update
    async updateSensor(id, data) {
        const { localizacao, temp } = data;
        const sensores = await readSensorFile();

        const sensorIndex = sensores.findIndex(sensor => sensor.id === id);
        if (sensorIndex === -1) {
            throw new Error("Sensor não encontrado");
        }

        //atualizar os dados
        sensores[sensorIndex] = { id, localizacao, temp };
        await writeSensorFile(sensores);
        return sensores[sensorIndex];
    }


}

export const sensorService = new SensorService();