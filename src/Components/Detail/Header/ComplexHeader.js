import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Iheart } from "Components/Detail/Images/heart.svg";
import { ReactComponent as Icopy } from "Components/Detail/Images/copy.svg";

const ComplexHeader = props => {
  const [like, setLike] = useState(false);
  const { info } = props;

  return (
    <Block>
      <Box>
        <Wrap>
          <Address>
            <span>{info.complex_type}</span>
            <span> • </span>
            <span>{info.address}</span>
          </Address>
          <h1>{info.name}</h1>
          <BtnWrap>
            <FavoriteBtn
              isClick={like}
              onClick={() => {
                setLike(!like);
              }}
            >
              <Iheart />
              {/* 현재 임시로 넣은 값 */}
              <span>{like ? "10" : "9"}</span>
            </FavoriteBtn>
            <Dot>•</Dot>
            <Icopy
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("주소가 복사되었습니다.");
              }}
            />
          </BtnWrap>
        </Wrap>
        <Features>
          <Feature>
            <FeatureName>준공년월</FeatureName>
            <FeatureData>{info.enter_date}</FeatureData>
          </Feature>
          <Feature line>
            <FeatureName>총 세대수</FeatureName>
            <FeatureData>{info.household_num}</FeatureData>
          </Feature>
          <Feature line>
            <FeatureName>주차대수</FeatureName>
            <FeatureData>가구당 {info.parking_average}대</FeatureData>
          </Feature>
          <Feature line>
            <FeatureName>총 동수</FeatureName>
            <FeatureData>{info.building_num}동</FeatureData>
          </Feature>
          <Feature line>
            <FeatureName>난방방식</FeatureName>
            <FeatureData>{info.heat_type}</FeatureData>
          </Feature>
          <Feature line>
            <FeatureName>최저-최고층</FeatureName>
            <FeatureData>
              {info.lowest_floor}-{info.highest_floor}층
            </FeatureData>
          </Feature>
        </Features>
      </Box>
    </Block>
  );
};

export default ComplexHeader;

const Block = styled.div`
  padding-top: 15px;
`;

const Box = styled.div`
  width: 1180px;
  position: relative;
  margin: 0px auto;
`;
const Wrap = styled.div`
  margin-top: 100px;
  margin-bottom: 17px;
  h1 {
    margin-top: 2px;
    margin-bottom: 35px;
    color: rgb(34, 34, 34);
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
  }
`;
const Address = styled.p`
  color: rgb(102, 102, 102);
  font-size: 14px;
  line-height: 20px;
`;
const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  height: 22px;
  svg {
  }
`;
const FavoriteBtn = styled.p`
  cursor: pointer;
  height: 22px;
  font-size: 15px;
  line-height: 22px;
  > span {
    position: relative;
    left: 4px;
    bottom: 5px;
  }
  > svg > path {
    ${props =>
      props.isClick &&
      `fill: #f63c4a;
    stroke: #f63c4a;`}
  }
`;
const Dot = styled.p`
  position: relative;
  margin-left: 15px;
  margin-right: 18px;
  left: 5px;
  ~ svg {
    position: relative;
    left: 2px;
    bottom: 3px;
  }
`;
const Features = styled.ul`
  display: flex;
  position: absolute;
  top: 25px;
  right: 0px;
  transform: translateY(-25px);
`;
const Feature = styled.li`
  display: flex;
  flex-direction: column;
  ${props =>
    props.line &&
    ` margin-left: 39px;
      padding-left: 35px;
      border-left: 1px solid rgb(235, 235, 235);
    `}
`;
const FeatureName = styled.p`
  margin-bottom: 4px;
  color: rgb(136, 136, 136);
  font-size: 14px;
  text-align: center;
  line-height: 20px;
`;
const FeatureData = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: rgb(34, 34, 34);
`;
