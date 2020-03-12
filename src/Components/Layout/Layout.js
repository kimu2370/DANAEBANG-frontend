import React, { Component } from "react";
import GlobalStyles from "Styles/GlobalStyles";
import Nav from "Components/Layout/Nav/Nav";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <GlobalStyles />
        <Nav />
        <section>{children}</section>
      </>
    );
  }
}
