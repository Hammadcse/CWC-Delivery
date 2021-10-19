import React from "react";
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Redirect
    } from "react-router-dom";
import Home from "./modules/Home/Home";
import Charges from './modules/Charges/Charges.js'

const BasePage = () => {
      return (
            <Router>
                  <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/charges" component={Charges} />
                        <Redirect to="/" /> 
                  </Switch>
            </Router>
      );
}
export default BasePage;