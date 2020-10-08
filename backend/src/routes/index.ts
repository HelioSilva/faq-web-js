import { Router } from "express";
import questionRouter from "./questions.routes";
import usersRouter from "./users.routes";

const routes = Router();

routes.use("/questions", questionRouter);
routes.use("/users", usersRouter);

export default routes;
