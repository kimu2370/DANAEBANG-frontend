import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Kakao from "react-kakao-login";
import ReactDOM from "react-dom";
class KakaoLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
      kakaoToken: ""
    };
  }

  responseKakao = res => {
    console.log(res);
    this.setState({
      id: res.profile.id,
      name: res.profile.properties.nickname,
      provider: "kakao",
      kakaoToken: res.response.access_token
    });
  };

  responseFail = err => {
    console.log(err);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <KakaoLoginBtn
          jsKey={"889a2555ed1ed3cfd6f80d9b187f256b"}
          onSuccess={this.responseKakao}
          onFailure={this.responseFail}
          getProfile="true"
          buttonText="카카오톡으로 시작"
        />
      </>
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
