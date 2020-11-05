import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/index";
import Login from "../pages/login/index";
import Question from "../pages/question";
import Signup from "../pages/signup/index";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/question" component={Question} />
  </Switch>
);

export default Routes;
