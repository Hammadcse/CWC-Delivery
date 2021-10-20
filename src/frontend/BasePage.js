import React from "react";
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Redirect
    } from "react-router-dom";
import Home from "./modules/Home/Home";
import AccountsInfo from "./modules/InfoDetails/AccountsInfo";
import CompanyInfo from "./modules/InfoDetails/CompanyInfo";
import Login from "./modules/Login/Login";
import Charges from './modules/Charges/Charges';
import AboutUs from "./modules/About/AboutUs";


const BasePage = () => {
      return (
            <Router>
                  <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/about-us" component={AboutUs} />
                        <Route exact path="/sign-up" component={CompanyInfo} />
                        <Route exact path="/company-info" component={CompanyInfo} />
                        <Route exact path="/accounts-info" component={AccountsInfo} />
                        <Route exact path="/charges" component={Charges} />
                        <Redirect to="/" component={Home}/> 
                  </Switch>
            </Router>
      );
}
export default BasePage;