import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "Components/Login/Login";
import Main from "Components/Main/Main";
import RoomDetail from "Pages/RoomDetail";
import ComplexDetail from "Pages/ComplexDetail";
import Layout from "Components/Layout/Layout";
import FindRoom from "Pages/FindRoom";
import SignIn from "Components/Auth/Modal/Modal";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/" component={Main} />
          <Route exact path="/layout" component={Layout} />
          <Route exact path="/search" component={FindRoom} />
          <Route exact path="/detail" component={ComplexDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
