import { Router } from "express";
import sensorRouter from "./sensorRoutes.js";

const indexRouter =  Router();

// Usando as rotas que estão dentro de sensorRouter;
//indexRouter.use("/sensor",sensorRouter);

indexRouter.use(sensorRouter);

export default indexRouter;