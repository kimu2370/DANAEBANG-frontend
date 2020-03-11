import React, { Component } from "react";
import { FacebookProvider, LoginButton } from "react-facebook";
import styled from "styled-components";
import axios from "axios";
export default class Facebook extends Component {
  constructor() {
    super();
    this.state = {
      fbToken: ""
    };
  }

  handleResponse = data => {
    console.log(data.tokenDetail.accessToken);
    console.log(data);
    this.setState(
      {
        fbToken: data.tokenDetail.accessToken
      },
      () => {
        axios
          .get("10.58.6.174:8000/account/facebook-signin", {
            headers: {
              Authorization: this.state.fbToken
            }
          })
          .then(res => res.json())
          .then(res => console.log(res))
          .then(res => {
            sessionStorage.setItem("fbToken", this.state.fbToken);
          });
        // .then(this.props.history.push("/"));
      }
    );
  };

  handleError = error => {
    this.setState({ error });
  };
  render() {
    return (
      <FacebookProvider appId="134253571347675">
        <Login
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          <span>페이스북으로 시작</span>
        </Login>
      </FacebookProvider>
    );
  }
}

const Login = styled(LoginButton)`
  height: 50px;
  margin-left: 10px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
  background-color: rgb(53, 74, 135);
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  width: 50%;
`;
