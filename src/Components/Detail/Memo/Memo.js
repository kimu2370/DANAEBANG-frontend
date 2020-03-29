import React, { useState } from "react";
import styled from "styled-components";
import { clearFix } from "Styles/clearFix";
const Memo = props => {
  const [btn, setBtn] = useState(true);
  const { info } = props;
  return (
    <div>
      <Box>
        <Wrap>
          <Title>{info.title}</Title>
          <Detail style={btn ? { height: "130px" } : { heigth: "946px" }}>
            <div>{info.description}</div>
          </Detail>
          <ShowBtn onClick={() => setBtn(!btn)}>
            {btn ? "상세설명 더보기" : "접기"}
            {btn ? (
              <svg width="16" height="12" viewBox="0 0 16 12">
                <path
                  fill="none"
                  fillRule="evenodd"
                  stroke="#1476FC"
                  d="M2 3l6 6 6-6"
                ></path>
              </svg>
            ) : (
              <svg width="16" height="12" viewBox="0 0 16 12">
                <path
                  fill="none"
                  fillRule="evenodd"
                  stroke="#1476FC"
                  d="M2 9l6-6 6 6"
                ></path>
              </svg>
            )}
          </ShowBtn>
        </Wrap>
      </Box>
    </div>
  );
};

export default Memo;

const Box = styled.div`
  width: 1180px;
  position: relative;
  margin: 0px auto;
`;
const Wrap = styled.div`
  width: 100%;
  min-height: 260px;
  padding-bottom: 130px;
  position: relative;
  ${clearFix}
`;

const Title = styled.h1`
  float: left;
  width: 520px;
  height: 130px;
  padding-right: 150px;
  color: rgb(34, 34, 34);
  font-size: 28px;
  font-weight: 300;
  line-height: 36px;
  white-space: pre-wrap;
`;

const Detail = styled.div`
  float: left;
  width: calc(660px);
  padding-right: 20px;
  position: relative;
  overflow: hidden;
  transition: height 400ms ease 0s;
  > div {
    width: 100%;
    color: rgb(102, 102, 102);
    font-size: 16px;
    line-height: 26px;
    white-space: pre-wrap;
    overflow: hidden;
  }
`;

const ShowBtn = styled.button`
  cursor: pointer;
  height: 24px;
  color: rgb(20, 118, 252);
  font-size: 15px;
  background-color: transparent;
  position: absolute;
  left: 520px;
  bottom: 76px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  > svg {
    margin-left: 8px;
    position: relative;
  }
`;
