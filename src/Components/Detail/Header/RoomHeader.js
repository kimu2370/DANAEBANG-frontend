import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { contactOpenModalAction } from "Redux/Actions/contactOpenModalAction";
import { ReactComponent as Ichange } from "Components/Detail/Images/change.svg";
import { ReactComponent as Icontact } from "Components/Detail/Images/contact.svg";
import { ReactComponent as Icopy } from "Components/Detail/Images/copy.svg";
import { ReactComponent as Iheart } from "Components/Detail/Images/heart.svg";
import { ReactComponent as Ireport } from "Components/Detail/Images/report.svg";

const RoomHeader = props => {
  const [like, setLike] = useState(false);
  const [change, setChange] = useState(false);
  const { info } = props;
  console.log(info.trade_infos);
  return (
    <Box>
      <Summary>
        <Li>
          <Title>
            <span>
              {info.room_type}
              {info.room_sub_type && `(${info.room_sub_type})`}
            </span>
          </Title>
          <InfoWrap>
            <Info>{`${info.trade_infos[0].trade_info_name} ${
              info.trade_infos[0].deposit
            }${
              info.trade_infos[0].fee !== 0 ? "/" + info.trade_infos[0].fee : ""
            }`}</Info>
            <ManWon>만원</ManWon>
          </InfoWrap>
        </Li>
        <Li marginLeft>
          <Title>
            <span>전용면적</span>
          </Title>
          <InfoWrap>
            <Info>
              {!change
                ? `${info.room_size}㎡`
                : `${Math.round(info.room_size * 0.3025)}평`}
            </Info>
            <ChangeBtn onClick={() => setChange(!change)}>
              <Ichange />
              <Span>{change ? "㎡" : "평"}</Span>
            </ChangeBtn>
          </InfoWrap>
        </Li>
        <Li marginLeft>
          <Title>한달생활비</Title>
          <InfoWrap>
            <Info buleColor>{info.maintenance_price}만 원 + α</Info>
          </InfoWrap>
        </Li>
        <AgentLi>
          <AgentLeft>
            <AgentTilte>{info.agent.name}</AgentTilte>
            <AgentName>{info.agent.face_name}</AgentName>
          </AgentLeft>
          <ContactBtn
            onClick={() => {
              props.contactOpenModalAction();
            }}
          >
            <Icontact />
            <span>연락처보기</span>
          </ContactBtn>
        </AgentLi>
      </Summary>
      <BtnWrap>
        <Favorite
          isClick={like}
          onClick={() => {
            setLike(!like);
          }}
        >
          <Iheart />
          {like ? "1" : "0"}
        </Favorite>
        <Dot>•</Dot>
        <Icopy
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert("주소가 복사되었습니다.");
          }}
        />
        <Dot>•</Dot>
        <ReportBtn>
          <Ireport />
          <span>허위매물 신고</span>
        </ReportBtn>
      </BtnWrap>
    </Box>
  );
};

const mapStateToProps = state => {
  return { showModal: state.contactShowModal };
};
export default connect(mapStateToProps, { contactOpenModalAction })(RoomHeader);

const Box = styled.div`
  width: 1180px;
  position: relative;
  margin: 0px auto;
`;
const Summary = styled.ul`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding-top: 35px;
  margin-bottom: 35px;
`;
const Li = styled.li`
  ${props => props.marginLeft && "margin-left: 25px;"}
  list-style: none;
  height: 72px;
  padding-right: 25px;
  flex: 0 0 auto;
  border-right: 1px solid rgb(235, 235, 235);
  margin-top: 100px;
`;
const AgentLi = styled.li`
  display: flex;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  flex: 1 1 0%;
  margin-top: 100px;
`;
const Title = styled.p`
  margin-bottom: 6px;
  color: rgb(102, 102, 102);
  font-size: 14px;
  line-height: 20px;
`;
const InfoWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 37px;
`;
const Info = styled.h1`
  color: ${props => (props.buleColor ? `rgb(20, 118, 252)` : `rgb(34,34,34)`)};
  font-size: 30px;
  line-height: 37px;
  font-weight: 500;
`;
const ManWon = styled.span`
  margin-top: 8px;
  margin-left: 3px;
  color: rgb(102, 102, 102);
  font-size: 15px;
`;
const ChangeBtn = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 40px;
  height: 26px;
  padding-left: 1px;
  margin-left: 8px;
  background-color: rgb(255, 255, 255);
  position: relative;
  top: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(213, 213, 213);
  border-image: initial;
  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
`;
const Span = styled.span`
  color: rgb(34, 34, 34);
  margin-left: 2px;
  font-size: 12px;
`;
const AgentLeft = styled.div`
  float: left;
  margin-right: 12px;
`;
const AgentTilte = styled.p`
  color: rgb(34, 34, 34);
  font-size: 14px;
  text-align: right;
`;
const AgentName = styled.p`
  text-align: right;
  font-size: 14px;
  color: rgb(136, 136, 136);
`;
const ContactBtn = styled.button`
  cursor: pointer;
  width: 116px;
  height: 38px;
  color: rgb(34, 34, 34);
  font-size: 13px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(221, 221, 221);
  border-image: initial;
  border-radius: 19px;
  :hover {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(34, 34, 34);
    border-image: initial;
  }
  > svg {
    position: absolute;
    left: 18px;
    top: 10px;
  }
  > span {
    position: absolute;
    left: 38px;
    top: 8px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 22px;
  margin-bottom: 17px;
  > svg:hover {
    cursor: pointer;
  }
`;
const Favorite = styled.p`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 22px;
  color: rgb(34, 34, 34);
  font-size: 15px;
  line-height: 22px;
  position: relative;
  user-select: none;
  margin-right: 4px;
  cursor: pointer;
  > svg > path {
    ${props =>
      props.isClick &&
      `fill: #f63c4a;
    stroke: #f63c4a;`}
  }
`;
const Dot = styled.p`
  line-height: 22px;
  position: relative;
  bottom: 1px;
  margin: 0px 10px;
`;

const ReportBtn = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  max-width: 120px;
  height: 34px;
  color: rgb(68, 68, 68);
  font-size: 12px;
  font-weight: 400;
  background-color: rgb(255, 255, 255);
  padding: 0px 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  :hover {
    cursor: pointer;
  }
  > svg {
    fill: rgb(34, 34, 34);
    position: relative;
    bottom: 1px;
  }
  :hover > svg {
    fill: rgb(246, 60, 74);
  }
  > span {
    margin-left: 6px;
    position: relative;
    top: 1px;
  }
`;
