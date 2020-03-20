import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { CloseBtn, ModalButton, FlexDiv } from "Components/Auth/Modal/Style.js";
import styled from "styled-components";
import { ReactComponent as CloseBtnIcon } from "SVG/closebutton.svg";
import { AppContext } from "Contexts/AppContext";
import Login from "Components/Auth/Login/Login";
import { Agreement } from "Components/Auth/Agreement/Agreement";
import Signup from "Components/Auth/Signup/Signup";
import FbSignup from "../Signup/FbSignup";
import KakaoSignup from "../Signup/KakaoSignup";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    overflowX: "hidden",
    overflowY: "auto",
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    Zindex: "1000",
    padding: "10% 0px",
    animation: "250ms ease-in-out 0s 1 normal none running boJeDs"
  },
  content: {
    width: "420px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 15px 18px -10px",
    backgroundColor: "rgb(255, 255, 255)",
    overflowX: "hidden",
    overflowY: "auto",
    position: "relative",
    Zindex: "1001",
    margin: "0px auto",
    transition: "width 300ms ease-in-out 0s"
  }
};

const CloseIcon = styled(CloseBtnIcon)`
  position: absolute;
  top: 50%;
  left: 5px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 26px;
  height: 34px;
  fill: rgb(255, 255, 255);
  stroke: rgb(151, 151, 151);
  opacity: 1;
  & g.Close {
    stroke: black;
  }
`;

const SignIn = () => {
  // const [isModalOpen, setIsOpen] = useState(false);
  // const [loginStep, setLoginStep] = useState(0);
  const {
    isModalOpen,
    setIsModalOpen,
    setLoginStep,
    loginStep,
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn
  } = useContext(AppContext);

  const loginComponentSteps = [
    { title: "로그인 ", component: <Login /> },
    { title: "약관동의 ", component: <Agreement /> },
    { title: "회원가입 ", component: <Signup /> },
    { title: "회원가입", component: <FbSignup /> },
    { title: "회원가입", component: <KakaoSignup /> }
  ];

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
    setLoginStep(0);
  }

  return (
    <>
      <FlexDiv>
        <ModalButton onClick={openModal}>회원가입 · 로그인 </ModalButton>
      </FlexDiv>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverLayClick={false}
          style={customStyles}
        >
          <CloseBtn onClick={closeModal}>
            <CloseIcon />
          </CloseBtn>
          <>
            <Title>{loginComponentSteps[loginStep].title}</Title>
            {loginComponentSteps[loginStep].component}
          </>
        </Modal>
      )}
    </>
  );
};

export default SignIn;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 20px;
  color: rgb(34, 34, 34);
  font-size: 25px;
  text-align: center;
  line-height: 37px;
  font-weight: 500;
`;
