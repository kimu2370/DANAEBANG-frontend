import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { INFO_IMG } from "./Data";
import { ReactComponent as NoLeftImg } from "Components/Detail/Images/nolayout.svg";
import { ReactComponent as Ichange } from "Components/Detail/Images/change.svg";
import { clearFix } from "Styles/clearFix";
const InfoLeft = props => {
  const [change, setChange] = useState(false);
  const info = props.pyeongInfo;
  return (
    <Box>
      <Header>면적정보</Header>
      <Wrap>
        {info.lay_out_image_URL ? (
          <>
            <Layout src={info.lay_out_image_URL} />
            <LayoutFooter>
              <span>기본형</span>
            </LayoutFooter>
          </>
        ) : (
          <NoLayout>
            <NoLeftImg />
            <p>평면도를 준비중입니다.</p>
          </NoLayout>
        )}
        <InfoWrap>
          <TextInfo>
            <Name>
              전용/
              {info.contract_size
                ? "계약면적"
                : info.provision_size && "공급면적"}
            </Name>
            <Value>
              {!change
                ? info.room_size + "㎡"
                : Math.round(Number(info.room_size) * 0.3025) + "평"}
              /
              {info.contract_size
                ? info.contract_size && !change
                  ? info.contract_size + "㎡"
                  : Math.round(Number(info.contract_size) * 0.3025) + "평"
                : info.provision_size && !change
                ? info.provision_size + "㎡"
                : Math.round(Number(info.provision_size) * 0.3025) + "평"}
            </Value>
            <ChangeBtn onClick={() => setChange(!change)}>
              <Ichange />
              <span>{change ? "평" : "㎡"}</span>
            </ChangeBtn>
          </TextInfo>
          <TextInfo>
            <Name>관리비(연평균)</Name>
            <Value>
              {info.maintenance_price
                ? parseInt(info.maintenance_price).toLocaleString()
                : "- "}
              원
            </Value>
          </TextInfo>
          {/* bath_num, entrance_type*/}
          {INFO_IMG.map((item, i) => (
            <Info key={i} src={item.src}>
              <div></div>
              <InfoTitle>{item.id === i && item.title}</InfoTitle>
              <InfoData>
                {item.id === 0
                  ? info.beds_num + "개"
                  : item.id === 1
                  ? info.bath_num + "개"
                  : item.id === 2
                  ? info.entrance_type
                  : item.id === 3 && props && props.householdNum + "세대"}
              </InfoData>
            </Info>
          ))}
        </InfoWrap>
      </Wrap>
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    householdNum: state.selectPyeong.householdNum,
    pyeongInfo: state.selectPyeong.pyeongInfo
  };
};

export default connect(mapStateToProps)(InfoLeft);

const Box = styled.div`
  float: left;
  width: 464px;
  height: 853px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(229, 229, 229);
  border-image: initial;
  border-radius: 4px 0px 0px 4px;
  + div {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: none;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 54px;
  color: rgb(34, 34, 34);
  font-size: 16px;
  font-weight: 700;
  line-height: 54px;
  text-align: left;
  padding-left: 20px;
  border-bottom: 1px solid rgb(228, 228, 228);
`;

const Wrap = styled.div`
  padding: 30px 30px 0px;
`;

const Layout = styled.div`
  width: 404px;
  height: 378px;
  margin: 0px auto;
  background: url(${props => props.src}) center center / contain no-repeat;
`;
const LayoutFooter = styled.div`
  height: 22px;
  text-align: center;
  margin: 30px auto 25px;
  > span {
    line-height: 22px;
    font-size: 15px;
    font-weight: 500;
    color: rgb(34, 34, 34);
    cursor: pointer;
  }
`;

const NoLayout = styled.div`
  width: 100%;
  height: 455px;
  background-color: rgb(255, 255, 255);
  position: relative;
  margin: 0px auto;
  > svg {
    position: absolute;
    top: 162px;
    left: 50%;
    transform: translateX(-50%);
  }
  > p {
    color: rgb(136, 136, 136);
    font-size: 14px;
    position: absolute;
    bottom: 199px;
    left: 50%;
    transform: translateX(-50%);
    padding: 6px 22px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(232, 232, 232);
    border-image: initial;
    border-radius: 32px;
  }
`;

const InfoWrap = styled.ul`
  width: 100%;
  border-top: 1px solid rgb(228, 228, 228);
  ${clearFix}
`;

const TextInfo = styled.li`
  width: 100%;
  height: 57px;
  text-align: center;
  border-bottom: 1px solid rgb(228, 228, 228);
`;
const Name = styled.span`
  display: inline-block;
  line-height: 57px;
  font-size: 14px;
  color: rgb(136, 136, 136);
`;
const Value = styled.span`
  display: inline-block;
  margin-left: 20px;
  line-height: 57px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(34, 34, 34);
`;
const ChangeBtn = styled.button`
  width: 40px;
  height: 23px;
  margin-left: 16px;
  background-color: rgb(255, 255, 255);
  position: relative;
  top: 5px;
  padding: 0px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(213, 213, 213);
  border-image: initial;
  border-radius: 3px;
  > svg {
    position: relative;
    left: -6px;
  }
  > span {
    color: rgb(34, 34, 34);
    font-size: 11px;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
`;

const Info = styled.li`
  float: left;
  width: 25%;
  padding-top: 63px;
  > div {
    width: 39px;
    height: 37px;
    margin: 0px auto 10px;
    background: url(${props => props.src}) center top / contain no-repeat;
  }
`;

const InfoTitle = styled.p`
  color: rgb(136, 136, 136);
  font-size: 14px;
  text-align: center;
  line-height: 20px;
`;
const InfoData = styled.p`
  color: rgb(34, 34, 34);
  font-size: 14px;
  text-align: center;
  line-height: 24px;
`;
