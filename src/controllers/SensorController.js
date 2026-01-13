class SensorController {

    constructor(sensorService) {
        this.service = sensorService;
    }

    // read - GET -
    list = async (req, res) => {
        try {
            const sensores = await this.service.getAllSensor();
            res.status(200).json({message: "success", data: sensores})
        } catch (error) {
            res.status(500).json({status: "fail", message: "Error interno no servidor"})
        }
        
    }

    // create - POST -
    create = async (req, res) => {

    }

    // update - PUT -
    update = async (req, res) => {

    }

    // delete - DELETE -
    del = async (req, res) => {

    }

}