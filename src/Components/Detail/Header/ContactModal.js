import React from "react";
import styled, { keyframes } from "styled-components";
import { contactCloseModalAction } from "Redux/Actions/contactCloseModalAction";
import { connect } from "react-redux";

const ContactModal = props => {
  // console.log(props);
  return (
    <Modal show={props.showModal.showModal}>
      <Overlay>
        <ModalContainer>
          <Header>
            <h1>연락처 보기</h1>
            <CloseBtn
              onClick={() => {
                props.contactCloseModalAction();
              }}
            >
              X
            </CloseBtn>
          </Header>
          <Wrap>
            <AgentWrap>
              <AgentTitle>
                <h1>베스트공인중개사사무소</h1>
                <p>서울 특별시 강북구 xxx</p>
              </AgentTitle>
              <AgentInfo>
                <p>
                  대표명<span>이종민</span>
                </p>
                <p>
                  대표번호 <span>02-123-4567</span>
                </p>
              </AgentInfo>
              <a href="#">중개소 정보 더보기</a>
            </AgentWrap>
          </Wrap>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};

// 전역 상태의 store에 있는 state를 이 컴포넌트에서 쓰고 싶다면 mapStateToProps인데 connect함수의 첫번째 인자이다.
// connect 함수는 액션 함수를 두번째 인자로 받는다.

const mapStateToProps = state => {
  console.log(state);
  return {
    showModal: state.contactShowModal
  };
};

export default connect(mapStateToProps, { contactCloseModalAction })(
  ContactModal
);

const Modal = styled.div`
  display: ${props => (props.show ? "block" : "none")};
`;

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 18px -10px;
  background-color: rgb(255, 255, 255);
  position: relative;
  z-index: 1001;
  margin: 7% auto;
  animation: 250ms ease-in-out 0s 1 normal none running ${animation};
`;

const Header = styled.header`
  position: relative;
  user-select: none;
  padding: 28px 30px 24px;
  border-bottom: 1px solid rgb(235, 235, 235);
  & > h1 {
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    text-align: center;
  }
`;
const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  position: absolute;
  top: 28px;
  right: 30px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
`;
const Wrap = styled.div`
  padding: 30px 30px 26px;
`;
const AgentWrap = styled.div`
  padding-bottom: 15px;
  position: relative;
  & > a {
    color: rgb(170, 170, 170);
    font-size: 13px;
    line-height: 24px;
    position: absolute;
    right: 0px;
    bottom: 15px;
    text-decoration: underline;
  }
`;
const AgentTitle = styled.div`
  margin-bottom: 11px;
  & > h1 {
    color: rgb(34, 34, 34);
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
  }
  & > p {
    color: rgb(136, 136, 136);
    font-size: 14px;
    line-height: 24px;
  }
`;
const AgentInfo = styled.div`
  & > p {
    color: rgb(136, 136, 136);
    font-size: 14px;
    line-height: 24px;
  }
  & > p > span {
    margin-left: 8px;
    color: rgb(34, 34, 34);
    font-weight: 500;
  }
`;
