import React, { useState, useContext } from "react";
import { AppContext } from "Contexts/AppContext";
import { ReactComponent as LogoImage } from "Components/Layout/Images/logo.svg";
import { ReactComponent as NewSign } from "Components/Main/Image/newsign.svg";
import { Link } from "react-router-dom";
import LoginModal from "Components/Auth/Modal/Modal";
import { withRouter } from "react-router-dom";
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

export default function Nav() {
  const [number, setNumber] = useState(0);

  const {
    isModalOpen,
    setIsModalOpen,
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn
  } = useContext(AppContext);

  const loginUser = e => {
    setIsLoggedIn(true);
  };
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
            {!isLoggedIn && <LoginModal />}
            {isLoggedIn && <NavRightLinks>Hello , {user.name}</NavRightLinks>}
          </RightDivFlex>
        </RightDivWrapper>
      </Navbar>
    </div>
  );
}

const Logo = styled(LogoImage)`
  color: #036bfd;
  margin: 0 15px;
  width: 140px;
  cursor: pointer;
`;

const New = styled(NewSign)`
  width: 7px;
  height: 8px;
  position: relative;
  top: -7px;
  left: 36px;
`;

class Nav extends Component {
  onClickLogo = () => {
    this.props.history.push("/");
    // console.log("아몰랑");
  };
  onClickSearch = () => {
    this.props.history.push("/search");
    // console.log("아몰랑");
  };
  render() {
    return (
      <div>
        <Navbar>
          <Logo onClick={this.onClickLogo} />
          <LeftDivFlex>
            <NavLeftLinks>프로중개사 사이트</NavLeftLinks>
            <DividerDiv />
            <NavLeftLinks>방주인 사이트</NavLeftLinks>
          </LeftDivFlex>
          <RightDivWrapper>
            <RightDivFlex>
              <NavRightLinks onClick={this.onClickSearch}>방찾기</NavRightLinks>
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

export default withRouter(Nav);
