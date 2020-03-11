import React, { Component } from "react";
import { ReactComponent as LogoImage } from "Components/Layout/Images/logo.svg";
import { ReactComponent as NewSign } from "Components/Main/Image/newsign.svg";
import { Link } from "react-router-dom";
import Modal from "Components/Auth/Modal/Modal";
import styled from "styled-components";
import {
  Navbar,
  LeftDivFlex,
  RightDivFlex,
  DividerDiv,
  NavLeftLinks,
  NavRightLinks,
  RightDivWrapper
} from "Components/Layout/Nav/NavStyle";

const Logo = styled(LogoImage)`
  color: #036bfd;
  margin: 0 15px;
  width: 140px;
`;

const New = styled(NewSign)`
  width: 7px;
  height: 8px;
  position: relative;
  top: -7px;
  left: 36px;
`;
export default class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Logo />
          <LeftDivFlex>
            <NavLeftLinks>프로중개사 사이트</NavLeftLinks>
            <DividerDiv />
            <NavLeftLinks>방주인 사이트</NavLeftLinks>
          </LeftDivFlex>
          <RightDivWrapper>
            <RightDivFlex>
              <NavRightLinks>방찾기</NavRightLinks>
              <NavRightLinks>
                <New />
                분양
              </NavRightLinks>
              <NavRightLinks>관심목록</NavRightLinks>
              <NavRightLinks>방내놓기</NavRightLinks>
              <NavRightLinks>알림</NavRightLinks>
              <Modal />
            </RightDivFlex>
          </RightDivWrapper>
        </Navbar>
      </div>
    );
  }
}
