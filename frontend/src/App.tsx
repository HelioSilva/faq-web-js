import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
