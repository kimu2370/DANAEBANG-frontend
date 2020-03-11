import styled from "styled-components";

const CloseBtn = styled.button`
  border-radius: 50%;
  width: 43px;
  height: 30px;
  background-color: transparent;
  position: absolute;
  top: 18px;
  right: 11px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
`;

const ModalButton = styled.button`
  width: 100%;
  align-self: center;
  font-size: 14px;
  letter-spacing: -0.5px;
  font-weight: 400;
  line-height: 19px;
  padding: 0;
  letter-spacing: -0.5px;
  color: rgb(136, 136, 136);
  font-weight: 400;
  &:hover {
    color: rgb(50, 108, 249);
    cursor: pointer;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
`;
export { CloseBtn, ModalButton, FlexDiv };
