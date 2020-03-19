import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Components/Main/Main";
import Layout from "Components/Layout/Layout";
import FindRoom from "Pages/FindRoom/FindRoom";
import SignIn from "Components/Auth/Modal/Modal";
import { Agreement } from "Components/Auth/Agreement/Agreement";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/agreement" component={Agreement} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/" component={Main} />
          <Route exact path="/layout" component={Layout} />
          <Route exact path="/search" component={FindRoom} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
