import React, { Component } from "react";
import Roomlist from "Pages/Findroom/components/RoomList";

import styled from "styled-components";

class RoomContent extends Component {
  render() {
    return (
      <>
        <TitleDiv>
          <ul>
            <li>전체 방 {this.props.roomlength}개</li>
            <li>단지 0개</li>
          </ul>
        </TitleDiv>
        <RoomContentWrap>
          <RoomListWrap>
            {this.props.roomDatafromparents.map((el, i) => (
              <Roomlist
                key={i}
                id={el.room_id}
                roomImg={el.image_url}
                type={el.trade_type_str}
                price={el.trade_deposit}
                floor={el.floor_str}
                size={el.room_size}
                title={el.title}
                month_price={el.trade_fee}
              />
            ))}
          </RoomListWrap>
        </RoomContentWrap>
        <PageSide></PageSide>
      </>
    );
  }
}
const TitleDiv = styled.div`
  width: 100%;
  padding: 33px 0 20px;
  margin: 120px 30px 0;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  position: fixed;
  /* top:10px; */
  & ul {
    display: flex;
    & li {
      height: 20px;
      margin-right: 30px;
      font-size: 24px;
      position: relative;
      &:nth-child(2) {
        color: #bbb;
        &::before {
          content: "";
          display: block;
          width: 1px;
          height: 20px;
          border-left: 1px solid #222;
          position: absolute;
          top: 4px;
          left: -10px;
        }
      }
    }
  }
`;
const RoomContentWrap = styled.div`
  width: 100%;
  padding: 20px 0 0 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const RoomListWrap = styled.ul`
  width: 100%;
  margin-top: 190px;
  padding: 0 20px;
  max-width: 1195px;
`;

const PageSide = styled.div`
  padding: 33px 0 20px;
  margin: 0 30px;
  border-top: 1px solid #eee;
  clear: both;
`;

export default RoomContent;
