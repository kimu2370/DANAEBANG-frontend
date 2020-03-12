import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "Components/Login/Login";
import Main from "Components/Main/Main";
import Layout from "Components/Layout/Layout";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/layout" component={Layout} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
