import { Router } from "express";
import questionRouter from "./questions.routes";

const routes = Router();

routes.use("/questions", questionRouter);

export default routes;
