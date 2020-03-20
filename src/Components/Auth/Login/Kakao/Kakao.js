import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Kakao from "react-kakao-login";

class KakaoLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
      kakaoToken: "",
      social_login_id: "",
      social_login_type: ""
    };
  }

  responseKakao = res => {
    // console.log(res);
    this.setState({
      provider: "kakao",
      kakaoToken: res.response.access_token
    });
    //console.log(res.response.access_token);
    axios
      .get("http://10.58.3.222:8000/account/kakao-login", {
        headers: {
          Authorization: res.response.access_token
        }
      })
      .then(res => res.data)
      .then(res => {
        this.setState({
          social_login_id: res.social_login_data.social_login_id,
          social_login_type: res.social_login_data.social_login_type_id
        });
      });
  };

  // handleRegister = () => {
  //   if (this.state === true) {
  //     e.target.name = setLoginStep(1);
  //   }
  // };

  responseFail = err => {
    console.log(err);
  };

  render() {
    // console.log(this.state);
    return (
      <KakaoLoginBtn
        jsKey={"889a2555ed1ed3cfd6f80d9b187f256b"}
        onSuccess={this.responseKakao}
        onFailure={this.responseFail}
        getProfile="true"
        buttonText="카카오톡으로 시작"
      />
    );
  }
}

export default KakaoLogin;

const KakaoLoginBtn = styled(Kakao)`
  height: 50px;
  color: rgb(34, 34, 34);
  font-size: 14px;
  font-weight: 500;
  background-color: rgb(247, 229, 6);
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  width: 50%;
`;
