import React, { Component } from "react";
import styled from "styled-components";

export default class FbSignup extends Component {
  render() {
    return (
      <>
        <BorderDiv />
        <form>
          <p>이메일</p>
          <Input type="email" />@
          <select>
            <option value="">gmail</option>
          </select>
          <p>휴대폰 번호</p>
        </form>
      </>
    );
  }
}

const BorderDiv = styled.div`
  border-top: 1px solid black;
  margin: 10px;
`;

const Input = styled.input`
  height: 46px;
  color: rgb(68, 68, 68);
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: 128px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  outline: none;
`;
