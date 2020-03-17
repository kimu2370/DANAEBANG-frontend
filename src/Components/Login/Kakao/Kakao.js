import React, { Component } from "react";
import Kakao from "kakaojs";
import styled from "styled-components";
import axios from "axios";
import { browserHistory } from "react-router";
class KakaoLogin extends Component {
  constructor() {
    super();
    this.state = {
      kakao: "",
      kakaoToken: ""
    };
  }
  // 사용할 앱의 JavaScript 키를 설정해 주세요
  componentDidMount() {
    if (Kakao.Auth == null) {
      Kakao.init("889a2555ed1ed3cfd6f80d9b187f256b");
    }
  }
  loginWithKakao = () => {
    Kakao.Auth.login({
      success: authObj => {
        Kakao.API.request({
          url: "/v2/user/me",
          success: function(res) {
            alert(JSON.stringify(res));
            alert(JSON.stringify(authObj));
            console.log(authObj.access_token);
          }
        });
      },
      fail: function(err) {
        console.log("에러", err);
      }
    });
  };

  render() {
    return (
      <>
        <KakaoLoginBtn onClick={this.loginWithKakao}>
          카카오톡으로 시작
        </KakaoLoginBtn>
      </>
    );
  }
}

export default KakaoLogin;

const KakaoLoginBtn = styled.button`
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
