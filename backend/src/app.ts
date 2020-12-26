import express from "express";
import cors from "cors";
import routes from "./routes";

import { createConnection, getConnectionOptions } from "typeorm";

(async () => {
  const defaultOptions = await getConnectionOptions();
  await createConnection(defaultOptions);
})();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static("uploads"));

export default app;
