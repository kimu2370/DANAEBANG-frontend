import React, { Component } from "react";
import GlobalStyles from "Fonts/Fonts";
import styled from "styled-components";

export default class Login extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <AwesomeHeadline>Hello</AwesomeHeadline>
      </div>
    );
  }
}

const AwesomeHeadline = styled.h1`
  font-family: Spoqa Han Sans Bold;
`;
