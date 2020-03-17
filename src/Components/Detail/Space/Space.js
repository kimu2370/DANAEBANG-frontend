import React from "react";
import styled from "styled-components";
import Spaces from "./Spaces";
import InfoLeft from "./InfoLeft";
import InfoRight from "./InfoRight";
const Space = props => {
  const { info } = props;
  return (
    <Box>
      <h1>평형정보</h1>
      <Wrap>
        <Spaces num={info.household_num} info={info.pyeong_infos}></Spaces>
        <InfoWrap>
          <InfoLeft info={info} />
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
  & > h1 {
    color: rgb(34, 34, 34);
    font-size: 28px;
    font-weight: 400;
    text-align: center;
    line-height: 41px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  margin-top: 30px;
  position: relative;
`;

const InfoWrap = styled.div`
  padding-left: 252px;
`;