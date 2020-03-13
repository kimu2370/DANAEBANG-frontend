import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "Components/Login/Login";
import Main from "Components/Main/Main";
import Layout from "Components/Layout/Layout";
import FindRoom from "Pages/FindRoom/FindRoom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/layout" component={Layout} />
          <Route exact path="/search" component={FindRoom} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
