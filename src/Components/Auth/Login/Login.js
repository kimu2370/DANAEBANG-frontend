import React, { useState, useContext } from "react";
import styled from "styled-components";
import KakaoLogin from "Components/Auth/Login/Kakao/Kakao";
import FacebookLogin from "Components/Auth/Login/Facebook/Facebook";
import { FlexDiv } from "Components/Auth/Modal/Style";
import { AppContext } from "Contexts/AppContext";

const Login = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    setLoginStep,
    loginStep
  } = useContext(AppContext);

  const handleChange = e => {
    // setUserName(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const closeModal = e => {
    setIsModalOpen(false);
  };
  const loginUser = e => {
    console.log(user.name);
    console.log(user.password);
    if (!user.name || !user.password) {
      // Check if the input values are empty
      // If empty, then don't close modal, throw error
      console.log("You have empty fields!");
    } else {
      // Else, check if the input values match the values the database expects
      // If it doesn't match, then throw error

      let expectedUser = "fc";
      let expectedPassword = "123";

      if (user.name === expectedUser && user.password === expectedPassword) {
        console.log("access granted!");
        // If it does match, then close modal, set login to true
        closeModal();
        setIsLoggedIn(true);
      } else {
        console.log("access denied");
      }
    }
  };

  const handleOtherLogin = e => {
    // console.log(e.target.name);
    // console.log(loginStep);

    e.target.name = setLoginStep(1);
  };

  return (
    <div>
      <div>
        <Input
          type="text"
          placeholder="아이디"
          name="name"
          id="name"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <Div>
          <Label>
            <SaveIDP>
              <input type="checkbox" />
              <Span>아이디 저장</Span>
            </SaveIDP>
            <FindPassword>비밀번호찾기</FindPassword>
          </Label>
        </Div>
        <FlexDiv>
          <LoginBtn onClick={loginUser}>로그인</LoginBtn>
        </FlexDiv>
        <FlexDiv>
          <ButtonWrapper>
            <KakaoLogin onClick={handleOtherLogin} name="loginWithKakao" />
            <FacebookLogin
              onClick={handleOtherLogin}
              name="loginWithFacebook"
            />
          </ButtonWrapper>
        </FlexDiv>
      </div>
      <RegisterWrapper>
        <P>
          아직 회원이 아니세요?
          <RegisterBtn onClick={handleOtherLogin} name="createNewAccount">
            회원가입하기
          </RegisterBtn>
        </P>
      </RegisterWrapper>
    </div>
  );
};

export default Login;

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
const Div = styled.div`
  width: 100%;
  margin: 18px 0px;
  display: flex;
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
const SaveIDP = styled.p`
  margin-left: 6px;
  color: rgb(136, 136, 136);
  font-size: 14px;
  line-height: 22px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 4px;
`;

const P = styled.p`
  font-size: 14px;
  text-align: center;
`;
const RegisterBtn = styled.button`
  font-size: 14px;
  color: blue;
  text-align: center;
`;

const RegisterWrapper = styled.div`
  padding: 24px 0px 40px;
`;

const FindPassword = styled.button`
  display: flex;
  margin-left: 194px;
  font-size: 14px;
  color: blue;
`;

const Label = styled.label`
  display: flex;
`;

const Span = styled.span`
  margin: 8px;
`;
