import React, { Component } from "react";
import styled from "styled-components";

export default class Signup extends Component {
  render() {
    return (
      <>
        <BorderDiv />
        <Body>
          <BodyText>
            <P>이름</P>
            <Input type="text" />
          </BodyText>

          <div style={{ display: "flex" }}>
            <P>이메일</P>
            <EmailInput type="email" />@
            <Select>
              <option value="">선택해주세요.</option>
              <option value="">naver.com</option>
              <option value="">daum.net</option>
              <option value="">hanmail.net</option>
              <option value="">hotmail.com</option>
              <option value="">nate.com</option>
              <option value="">yahoo.co.kr</option>
              <option value="">gmail.com</option>
              <option value="">직접입력</option>
            </Select>
          </div>
          <div style={{ display: "flex" }}>
            <p>비밀번호</p>
            <Input type="password" />
          </div>
          <div style={{ display: "flex" }}>
            <P>비밀번호 확인</P>
            <Input type="password" />
          </div>
          <div style={{ display: "flex" }}>
            <P>휴대폰 번호</P>
            <div>
              <PhoneSelect>
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
                <option>019</option>
              </PhoneSelect>
            </div>
            -
            <PhoneInput />-<PhoneInput />
            <RequireAuthPhoneNum>인증번호 요청</RequireAuthPhoneNum>
          </div>
          <div style={{ display: "flex" }}>
            <AuthPhoneNumInput />
            <RequireAuthPhoneNum>인증번호 확인</RequireAuthPhoneNum>
          </div>
        </Body>

        <RegisterBtn>이메일 회원가입</RegisterBtn>
      </>
    );
  }
}

const BorderDiv = styled.div`
  border-top: 1px solid black;
  margin: 10px;
`;

const P = styled.p`
  float: left;
  width: 100px;
  height: 46px;
  color: rgb(34, 34, 34);
  font-size: 15px;
  line-height: 46px;
`;

const Input = styled.input`
  height: 46px;
  color: rgb(68, 68, 68);
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: calc(100% - 100px);
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  outline: none;
  width: 100%;
}
`;
const EmailInput = styled.input`
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

const PhoneInput = styled.input`
  height: 46px;
  color: rgb(68, 68, 68);
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: 92px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  outline: none;
`;

const RequireAuthPhoneNum = styled.button`
  float: left;
  width: 120px;
  height: 46px;
  margin-left: 10px;
  color: rgb(21, 100, 249);
  font-size: 14px;
  font-weight: 500;
  background-color: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(49, 133, 248);
  border-image: initial;
`;

const AuthPhoneNumInput = styled.input`
  height: 46px;
  color: rgb(68, 68, 68);
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: 320px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  outline: none;
`;

const RegisterBtn = styled.button`
  width: 100%;
  height: 70px;
  color: rgb(255, 255, 255);
  font-size: 17px;
  font-weight: 500;
  background-color: rgb(26, 90, 232);
  bottom: 0px;
  left: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 0px;
  margin-top: 18px;
`;

const Body = styled.div`
  width: 100%;
`;

const BodyText = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
`;

const Select = styled.select`
  color: rgb(68, 68, 68);
  font-size: 15px;
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: 297px;
  min-width: auto;
  height: 46px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  background: url(/static/media/arrow.f3c02f94.svg) right 15px center / 10px
    no-repeat rgb(255, 255, 255);
  outline: none;
`;

const PhoneSelect = styled.select`
  color: rgb(68, 68, 68);
  font-size: 15px;
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: 92px;
  min-width: auto;
  height: 46px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  background: url(/static/media/arrow.f3c02f94.svg) right 15px center / 10px
    no-repeat rgb(255, 255, 255);
  outline: none;
`;
