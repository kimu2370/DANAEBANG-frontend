import React, { Component } from "react";
import { FacebookProvider, LoginButton } from "react-facebook";
import styled from "styled-components";
import axios from "axios";
export default class Facebook extends Component {
  constructor() {
    super();
    this.state = {
      fbToken: "",
      siteToken: "",
      social_login_id: "",
      social_login_type_id: ""
    };
  }

  handleResponse = data => {
    // console.log(data.tokenDetail.accessToken);
    // console.log(data);
    this.setState({
      fbToken: data.tokenDetail.accessToken
    });

    axios
      .get("http://10.58.2.138:8000/account/facebook-signin", {
        headers: {
          Authorization: data.tokenDetail.accessToken
        }
      })
      .then(res => res.data)
      .then(res => {
        this.setState({
          social_login_id: res.social_login_data.social_login_id,
          social_login_type_id: res.social_login_data.social_login_type_id
        });
      });
  };

  //* request in the localstorage(myproject token)
  //* if u have token then u are logged in
  //?? get the token then show the agreement page.

  handleError = error => {
    this.setState({ error });
  };
  render() {
    // console.log(this.state);
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
