import React, { Component } from "react";
import GlobalStyles from "Styles/GlobalStyles";
import Nav from "Components/Layout/Nav/Nav";
import AppContextProvider from "Contexts/AppContext";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <AppContextProvider>
          <GlobalStyles />
          <Nav />
          <section>{children}</section>
        </AppContextProvider>
      </>
    );
  }
}
