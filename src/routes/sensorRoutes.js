import { Router } from "express";
import { sensorController } from "../controllers/SensorController.js";

const sensorRouter = Router();

sensorRouter.get("/sensor", sensorController.getlistagemSensor);
sensorRouter.post("/sensor", sensorController.create);
sensorRouter.put("/sensor", sensorController.update);
sensorRouter.delete("/sensor", sensorController.delete);
// sensorRouter.post(sensorController.create);


export default sensorRouter;