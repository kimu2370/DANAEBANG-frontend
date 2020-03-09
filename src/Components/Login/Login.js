import React, { Component } from "react";
import GlobalStyles from "Styles/GlobalStyles";
import styled from "styled-components";

export default class Login extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <AwesomeHeadline>Bold</AwesomeHeadline>
        <AwesomeHeadline2> A Light</AwesomeHeadline2>
        <AwesomeHeadline3>A Regular</AwesomeHeadline3>
        <AwesomeHeadline4> A Thin</AwesomeHeadline4>
      </div>
    );
  }
}

const AwesomeHeadline = styled.h1`
  font-family: Spoqa Han Sans Bold;
  font-size: 100px;
`;

const AwesomeHeadline2 = styled.h2`
  font-family: Spoqa Han Sans Light;
  font-size: 100px;
`;
const AwesomeHeadline3 = styled.h3`
  font-family: Spoqa Han Sans Regular;
  font-size: 100px;
`;
const AwesomeHeadline4 = styled.h4`
  font-family: Spoqa Han Sans Thin;
  font-size: 100px;
`;
