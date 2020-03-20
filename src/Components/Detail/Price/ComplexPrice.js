import React from "react";
import styled from "styled-components";

const ComplexPrice = props => {
  return (
    <>
      <Box>
        <h1>가격정보</h1>
        <Wrap>
          <PriceBox>
            <SubBox>
              <Text>단지 평당가</Text>
              <Type>매매</Type>
              <Value>-</Value>
              <Type>전세</Type>
              <Value>-</Value>
            </SubBox>
            <SubBox>
              <Text>이 지역 평당가</Text>
              <Type>매매</Type>
              <Value>
                {props.build_cov_ratio
                  ? parseInt(props.build_cov_ratio) + "만/3.3m²당"
                  : "-"}
              </Value>
              <Type>전세</Type>
              <Value>
                {props.floor_area_index
                  ? parseInt(props.floor_area_index) + "만/3.3m²당"
                  : "-"}
              </Value>
            </SubBox>
          </PriceBox>
        </Wrap>
      </Box>
    </>
  );
};

export default ComplexPrice;

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
  width: 1180px;
  margin: 0px auto;
  padding: 0px 165px;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;
const PriceBox = styled.div`
  display: inline-block;
  width: 850px;
  height: 180px;
  margin-top: 30px;
  padding: 0px 155px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(221, 221, 221);
  border-image: initial;
`;

const SubBox = styled.div`
  height: 90px;
  padding: 40px 0px 20px 11px;
  & > p {
    float: left;
  }
  & + div {
    padding: 20px 0px 20px 11px;
    border-top: 1px solid rgb(228, 228, 228);
  }
`;

const Text = styled.p`
  width: 100px;
  height: 22px;
  line-height: 30px;
  margin-right: 15px;
  font-size: 15px;
  color: rgb(102, 102, 102);
`;

const Type = styled.p`
  line-height: 30px;
  margin-right: 8px;
  font-size: 18px;
  color: rgb(34, 34, 34);
`;
const Value = styled.p`
  width: 160px;
  line-height: 30px;
  font-size: 20px;
  color: rgb(50, 108, 249);
`;
