import React, { useState } from "react";
import Modal from "react-modal";
import { CloseBtn, ModalButton, FlexDiv } from "Components/Auth/Modal/Style.js";
import styled from "styled-components";
import Stepper from "Components/Auth/Modal/Stepper";
import { ReactComponent as CloseBtnIcon } from "SVG/closebutton.svg";

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
  left: 20px;
  transform: translateY(-50%);
  width: 18px;
  height: 17px;
  fill: rgb(255, 255, 255);
  stroke: rgb(151, 151, 151);
  opacity: 1;
  & g.Close {
    stroke: black;
  }
`;

function SignIn() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <FlexDiv>
        <ModalButton onClick={openModal}>회원가입 · 로그인 </ModalButton>
      </FlexDiv>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverLayClick={false}
        style={customStyles}
      >
        <CloseBtn onClick={closeModal}>
          <CloseIcon />
        </CloseBtn>
        <Stepper />
      </Modal>
    </>
  );
}

export default SignIn;
