import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Global from "./global-styled";

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
