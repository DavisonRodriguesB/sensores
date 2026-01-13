import { sensorService } from "../services/SensorService.js";

class SensorController {
    
    constructor(sensorService) {
        this.service = sensorService;

    }

    // Read - GET
    getlistagemSensor = async (req, res) => {
        try {
            const sensores = await this.service.getAllSensor();
            res.status(200).json({ status: "success", data: sensores })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ 
                status: "fail", 
                message: "Erro interno ao consulta base de dados"
            })
        }
    }

    // Create - POST
    create = async (req, res) => {
        // Captura os dados da requisição;

        const body = req.body; 
        try {
            const sensor = await this.service.newSensor(body);
            res.status(201).json({ status: "success", data: sensor });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: "fail", message: "Erro interno" })
        }

    }

    // Update - PUT
    update = async (req, res) => {

    }

    // Delete - DELETE
    delete = async (req, res) => {

    }

}

export const sensorController = new SensorController(sensorService)