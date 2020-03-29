import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { contactCloseModalAction } from "Redux/Actions/contactCloseModalAction";

const ContactModal = props => {
  const { info } = props;
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
                <h1>{info.agent.name}</h1>
                <p>{info.agent.address}</p>
              </AgentTitle>
              <AgentInfo>
                <p>
                  대표명<span>{info.agent.face_name}</span>
                </p>
                <p>
                  대표번호 <span>{info.agent.face_number}</span>
                </p>
              </AgentInfo>
              <a href="#">중개소 정보 더보기</a>
            </AgentWrap>
            <UserWrap>
              <UserImg />
              <UserInfo>
                <Name>{info.belonged_agent.name}</Name>
                <Phone>
                  <svg width="18" height="19" viewBox="0 0 18 19">
                    <path
                      fill="#1476FC"
                      d="M17.063 13.313c1.015 1.015 1.015 2.132 0 3.351-.407.474-.805.83-1.194 1.066-.39.237-.71.373-.965.407-.254.034-.618.05-1.091.05-1.32 0-2.895-.677-4.723-2.03a29.861 29.861 0 0 1-3.961-3.403A27.204 27.204 0 0 1 1.117 7.32C.102 5.424-.203 3.867.203 2.648.406 2.005.88 1.447 1.625.973l.05-.051c.61-.406 1.152-.61 1.626-.61.643 0 1.219.305 1.726.915l.051.05c.779 1.016 1.32 1.812 1.625 2.387.508 1.05.491 1.947-.05 2.691-.407.542-.61.931-.61 1.168 0 .102.22.407.66.915l.05.05c.813.914 1.254 1.405 1.321 1.473.034 0 .068.017.102.05l.203.204a39.899 39.899 0 0 0 1.473 1.422l.05.05c.305.271.508.407.61.407.169 0 .66-.254 1.472-.762.237-.17.525-.254.864-.254.609 0 1.345.254 2.209.762.863.508 1.532.999 2.005 1.473z"
                    ></path>
                  </svg>
                  {info.belonged_agent.phone_number}
                </Phone>
                <Text>연락 시 다방에서 보고 연락한다고 말씀하시면</Text>
                <Text>더욱 빠르게 상담 받을 수 있습니다.</Text>
              </UserInfo>
            </UserWrap>
          </Wrap>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};

// 전역 상태의 store에 있는 state를 이 컴포넌트에서 쓰고 싶다면 mapStateToProps인데 connect함수의 첫번째 인자이다.
// connect 함수는 액션 함수를 두번째 인자로 받는다.

const mapStateToProps = state => {
  // console.log(state);
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
  > h1 {
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
  > a {
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
  > h1 {
    color: rgb(34, 34, 34);
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
  }
  > p {
    color: rgb(136, 136, 136);
    font-size: 14px;
    line-height: 24px;
  }
`;
const AgentInfo = styled.div`
  > p {
    color: rgb(136, 136, 136);
    font-size: 14px;
    line-height: 24px;
  }
  > p > span {
    margin-left: 8px;
    color: rgb(34, 34, 34);
    font-weight: 500;
  }
`;

const UserWrap = styled.div`
  text-align: center;
  padding: 30px 0px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;
const UserImg = styled.div`
  width: 76px;
  height: 76px;
  background-color: rgb(243, 243, 243);
  position: relative;
  margin: 0px auto;
  border-radius: 50%;
  overflow: hidden;
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: url() center center / cover no-repeat;
  }
`;
const UserInfo = styled.div`
  width: 100%;
  margin-top: 10px;
  text-align: center;
`;

const Name = styled.p`
  color: rgb(68, 68, 68);
  font-size: 16px;
  line-height: 24px;
`;
const Phone = styled.p`
  margin-bottom: 8px;
  color: rgb(20, 118, 252);
  font-size: 25px;
  font-weight: 500;
  line-height: 33px;
`;

const Text = styled.p`
  color: rgb(42, 144, 255);
  font-size: 13px;
  line-height: 17px;
  letter-spacing: -0.5px;
`;
