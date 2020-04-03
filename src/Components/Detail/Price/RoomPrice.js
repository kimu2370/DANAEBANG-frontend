import React from "react";
import styled from "styled-components";
import { clearFix } from "Styles/clearFix";
const RoomPrice = props => {
  const { info } = props;
  console.log(
    info.trade_infos.filter(item => item.trade_info_name === "전세")[0]
  );
  return (
    <Box>
      <Title>가격정보</Title>
      <PriceWrap>
        <colgroup>
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>월세</th>
            <th>전세</th>
            <th>관리비</th>
            <th>주차비</th>
            <th>단기임대</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                {info.trade_infos.filter(
                  item => item.trade_info_name === "월세"
                )[0] &&
                  info.trade_infos.filter(
                    item => item.trade_info_name === "월세"
                  )[0].deposit +
                    "/" +
                    info.trade_infos.filter(
                      item => item.trade_info_name === "월세"
                    )[0].fee}
              </p>
            </td>
            <td>
              <p>
                {info.trade_infos.filter(
                  item => item.trade_info_name === "전세"
                )[0] &&
                  info.trade_infos.filter(
                    item => item.trade_info_name === "전세"
                  )[0].deposit}
              </p>
            </td>
            <td>
              <p>{info.maintenance_price}만 원</p>
              <p>
                <span>(인터넷, 유선 TV, 수도세, 기타)</span>
              </p>
            </td>
            <td>
              <p>
                {info.room_add_info.parking_fee
                  ? info.room_add_info.parking_fee
                  : "불가"}
              </p>
            </td>
            <td>
              <p>{info.is_short_lease ? "가능" : "불가능"}</p>
            </td>
          </tr>
        </tbody>
      </PriceWrap>
      <DescWrap>
        <p>한달 생활비</p>
        <div>
          <label>{info.maintenance_price}만 원 + α</label>
        </div>
      </DescWrap>
    </Box>
  );
};

export default RoomPrice;

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

const PriceWrap = styled.table`
  width: 850px;
  margin: 30px auto 0px;
  border-top: 1px solid rgb(204, 204, 204);
  border-bottom: 1px solid rgb(204, 204, 204);
  > thead > tr {
    border-bottom: 1px solid rgb(238, 238, 238);
  }
  > thead > tr > th {
    vertical-align: middle;
    height: 50px;
    color: rgb(34, 34, 34);
    font-size: 15px;
    font-weight: 500;
  }
  > thead > tr > th + th {
    border-left: 1px solid rgb(238, 238, 238);
  }
  > tbody > tr > td {
    padding-top: 20px;
    padding-bottom: 27px;
    vertical-align: top;
  }
  > tbody > tr > td + td {
    border-left: 1px solid rgb(238, 238, 238);
  }
  > tbody > tr > td > p {
    color: rgb(68, 68, 68);
    font-size: 15px;
    text-align: center;
    line-height: 26px;
  }
`;
const DescWrap = styled.div`
  width: 850px;
  height: 112px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 5px 0px;
  margin: 30px auto 0px;
  padding: 0px 55px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(20, 118, 252);
  border-image: initial;
  border-radius: 4px;
  > p,
  > div {
    float: left;
    color: rgb(20, 118, 252);
    line-height: 110px;
  }
  > p {
    width: 165px;
    font-size: 20px;
  }
  > div {
    position: relative;
    width: 573px;
    font-size: 30px;
    font-weight: 500;
    > label {
      float: left;
    }
    > span {
      float: left;
      margin-left: 5px;
      color: rgb(68, 68, 68);
      font-size: 15px;
      font-weight: 400;
      position: relative;
    }
  }
  ${clearFix}
`;
