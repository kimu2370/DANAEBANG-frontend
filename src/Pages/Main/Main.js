import React, { Component } from "react";
import Nav from "Components/Nav/Nav";
class Main extends Component {
  render() {
    return (
      <div classname="main-container">
        <div className="main-container_main">
          <Nav />
          <div className="main-container_main-wrap">
            <div className="main-container_main-wrap_title"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
