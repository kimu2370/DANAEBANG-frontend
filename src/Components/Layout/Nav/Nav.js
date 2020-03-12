import React, { Component } from "react";
import LogoImage from "Components/Layout/Images/logo.png";
import GlobalStyles from "Styles/GlobalStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Logo src={LogoImage} />
          <DivFlex>
            <NavLeftLinks>프로중개사 사이트</NavLeftLinks>
            <DividerDiv />
            <NavLeftLinks>방주인 사이트</NavLeftLinks>
          </DivFlex>
          <DivFlex>
            <NavRightLinks>방찾기</NavRightLinks>
            <NavRightLinks>분양</NavRightLinks>
            <NavRightLinks>관심목록</NavRightLinks>
            <NavRightLinks>방내놓기</NavRightLinks>
            <SignupLogin>회원가입 · 로그인</SignupLogin>
          </DivFlex>
        </Navbar>
      </div>
    );
  }
}

const Navbar = styled.nav`
  width: 100%;
  min-width: 1366px;
  height: 70px;
  background-color: rgb(255, 255, 255);
  z-index: 21;
  padding: 0px 30px;
  border-bottom: 1px solid rgb(235, 235, 235);
  display: flex;
`;
const Logo = styled.img`
  width: 102px;
  height: 70px;
  align-items: center;
  top: -1px;
  left: 17px;
  right: 116px;
  border: 0 none;
  box-shadow: none;
  padding-left: 12px;
  background: transparent url(/static/media/logo.bbbe872b.png);
`;

const DivFlex = styled.div`
  display: flex;
  width: 100%;
`;

const DividerDiv = styled.div`
  border-left: 2px solid rgb(221, 221, 221);
  margin: 10px 10px;
  height: 20px;
  display: flex;
  align-self: center;
`;

const NavLeftLinks = styled.p`
  display: flex;
  align-self: center;
  font-size: 14px;
  letter-spacing: -0.5px;
  color: rgb(136, 136, 136);
  font-weight: 400;
  line-height: 19px;
`;

const NavRightLinks = styled.p`
  width: 50%;
  align-self: center;
  font-size: 14px;
  letter-spacing: -0.5px;
  font-weight: 400;
  line-height: 19px;
`;

const SignupLogin = styled.p`
  width: 50%;
  align-self: center;
  font-size: 14px;
  letter-spacing: -0.5px;
  color: rgb(136, 136, 136);
  font-weight: 400;
  line-height: 19px;
`;
