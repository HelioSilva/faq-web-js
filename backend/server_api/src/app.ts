import "dotenv/config";

import express from "express";
import cors from "cors";
import routes from "./routes";

import { createConnection, getConnectionOptions } from "typeorm";

(async () => {
  const defaultOptions = await getConnectionOptions();
  await createConnection(defaultOptions);
})();

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(
  express.json({
    limit: "128mb",
  })
);
app.use(routes);
app.use("/uploads", express.static("uploads"));

export default app;
