import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/index";
import Login from "../pages/login/index";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
