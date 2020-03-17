import React, { Component } from "react";
import styled from "styled-components";
import KakaoLogin from "Components/Login/Kakao/Kakao";
import FacebookLogin from "Components/Login/Facebook/Facebook";
import { FlexDiv } from "Components/Auth/Modal/Style";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <Input type="text" placeholder="아이디" />
          <Input type="password" placeholder="비밀번호" />
          <div>
            <input type="checkbox" placeholder="아이디 저장" />
            <span>아이디 저장</span>
            <button>비밀번호찾기</button>
          </div>
          <FlexDiv>
            <LoginBtn>로그인</LoginBtn>
          </FlexDiv>
          <FlexDiv>
            <ButtonWrapper>
              <KakaoLogin />
              <FacebookLogin />
            </ButtonWrapper>
          </FlexDiv>
        </form>
        <p>
          아직 회원이 아니세요?<span> 이메일로 회원가입</span>
        </p>
      </div>
    );
  }
}

const Input = styled.input`
  height: 46px;
  color: rgb(68, 68, 68);
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  -webkit-appearance: none;
  width: 97%;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  outline: none;
  margin: 5px;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 60px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
  background-color: rgb(26, 90, 232);
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  margin: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 4px;
`;
