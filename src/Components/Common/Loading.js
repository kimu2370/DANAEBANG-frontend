import React from "react";
import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = () => {
  return (
    <LoadingWrap>
      <Wrap>
        <SvgWrap>
          <AiOutlineLoading3Quarters />
        </SvgWrap>
        <Text>로딩중입니다.</Text>
        <Text>잠시만 기다려주세요.</Text>
      </Wrap>
    </LoadingWrap>
  );
};

export default Loading;

const LoadingWrap = styled.div`
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Wrap = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;
const SvgWrap = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 0px auto 20px;
`;
const Text = styled.p`
  margin-top: 2px;
  line-height: 20px;
  color: rgb(34, 34, 34);
  font-size: 15px;
`;
