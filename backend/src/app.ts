import express from "express";
import cors from "cors";
import routes from "./routes";

import { createConnection, getConnectionOptions } from "typeorm";

(async () => {
  const defaultOptions = await getConnectionOptions();
  await createConnection(defaultOptions);
})();

const app = express();

app.use(
  express.json({
    limit: "128mb",
  })
);
app.use(routes);
app.use("/uploads", express.static("uploads"));

app.use(cors());

export default app;
