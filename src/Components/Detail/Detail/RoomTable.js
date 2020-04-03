import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Ichange } from "Components/Detail/Images/change.svg";
import { clearFix } from "Styles/clearFix";
const RoomTable = props => {
  const [change, setChange] = useState(false);
  const { info } = props;
  return (
    <div>
      <Box>
        <List>
          <Item>
            <Name>해당층/건물층</Name>
            <Value>
              {info.room_floor}/{info.building_floor}
            </Value>
          </Item>
          <Item>
            <Name>전용/공급면적</Name>
            <Value>
              {!change
                ? `${info.room_size}/${
                    info.provision_size
                      ? info.provision_size
                      : info.contract_size
                  }㎡`
                : `${Math.round(info.room_size * 0.3025)}/${
                    info.provision_size
                      ? Math.round(info.provision_size * 0.3025)
                      : Math.round(info.contract_size * 0.3025)
                  }평`}
            </Value>
            <ChangeBtn onClick={() => setChange(!change)}>
              <Ichange />
              <Span>{change ? "㎡" : "평"}</Span>
            </ChangeBtn>
          </Item>
          <Item>
            <Name>난방종류</Name>
            <Value>{info.heat_type}</Value>
          </Item>
          <Item>
            <Name>빌트인</Name>
            <Value>{info.room_add_info.is_builtin ? "O" : "X"}</Value>
          </Item>
          <Item>
            <Name>엘리베이터</Name>
            <Value>{info.room_add_info.is_elevator ? "있음" : "없음"}</Value>
          </Item>
          <Item>
            <Name>반려동물</Name>
            <Value>{info.room_add_info.is_pet ? "가능" : "불가능"}</Value>
          </Item>
          <Item>
            <Name>베란다/발코니</Name>
            <Value>{info.room_add_info.is_balcony ? "있음" : "없음"}</Value>
          </Item>
          <Item>
            <Name>전세자금대출</Name>
            <Value>{info.room_add_info.is_loan ? "가능" : "불가능"}</Value>
          </Item>
          <Item>
            <Name>입주가능일</Name>
            <Value>{info.moving_date_type}</Value>
          </Item>
        </List>
      </Box>
    </div>
  );
};

export default RoomTable;

const Box = styled.div`
  width: 1180px;
  position: relative;
  margin: 0px auto;
`;
const List = styled.ul`
  width: 100%;
  margin-bottom: 30px;
  border-top: 2px solid rgb(34, 34, 34);
  ${clearFix}
`;
const Item = styled.li`
  float: left;
  width: 25%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgb(235, 235, 235);
  ::before {
    content: "·";
    float: left;
    color: rgb(34, 34, 34);
    margin-right: 7px;
  }
  ${clearFix}
`;
const Name = styled.p`
  float: left;
  width: 100px;
  color: rgb(136, 136, 136);
  font-size: 14px;
`;
const Value = styled.div`
  float: left;
  color: rgb(34, 34, 34);
  font-size: 14px;
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
  background-color: rgb(255, 255, 255);
  position: relative;
  top: 12px;
  left: 2px;
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
  font-size: 12px;
`;
