import React from "react";
import styled from "styled-components";
import Spaces from "./Spaces";
import InfoLeft from "./InfoLeft";
import InfoRight from "./InfoRight";
import { clearFix } from "Styles/clearFix";
const Space = props => {
  const { info } = props;
  return (
    <Box>
      <Title>평형정보</Title>
      <Wrap>
        <Spaces num={info.household_num} info={info.pyeong_infos}></Spaces>
        <InfoWrap>
          <InfoLeft />
          <InfoRight />
        </InfoWrap>
      </Wrap>
    </Box>
  );
};

export default Space;

const Box = styled.div`
  width: 1180px;
  position: relative;
  padding-top: 100px;
  padding-bottom: 120px;
  margin: 0px auto;
  border-top: 1px solid rgb(221, 221, 221);
`;

const Title = styled.h1`
  color: rgb(34, 34, 34);
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  line-height: 41px;
`;

const Wrap = styled.div`
  width: 100%;
  margin-top: 30px;
  position: relative;
`;

const InfoWrap = styled.div`
  width: 100%;
  padding-left: 252px;
  ${clearFix}
`;
