import React, { Component } from "react";
import Roomlist from "Pages/FindRoom/components/RoomList";
import { roomData } from "Pages/FindRoom/RoomData";
import styled from "styled-components";

class RoomContent extends Component {
  render() {
    return (
      <>
        <TitleDiv>
          <ul>
            <li>전체 방 {roomData.length}개</li>
            <li>단지 0개</li>
          </ul>
        </TitleDiv>
        <RoomContentWrap>
          <RoomListWrap>
            {roomData.map(el => (
              <Roomlist
                id={el.id}
                roomImg={el.roomImg}
                type={el.type}
                price={el.price}
                floor={el.floor}
                size={el.size}
                title={el.title}
              />
            ))}
          </RoomListWrap>
        </RoomContentWrap>
        <PageSide>
          <Pagenation>
            <button>이전</button>
            <ul>
              <li></li>
            </ul>
            <button>다음</button>
          </Pagenation>
        </PageSide>
      </>
    );
  }
}
const TitleDiv = styled.div`
  padding: 33px 0 20px;
  margin: 0 30px;
  border-bottom: 1px solid #eee;
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
  padding: 20px 30px 0 15px;
`;

const RoomListWrap = styled.ul`
  width: 100%;
  display: flex;
`;

const PageSide = styled.div`
  padding: 33px 0 20px;
  margin: 0 30px;
  border-top: 1px solid #eee;
`;
const Pagenation = styled.div`
  height: 30px;
  display: flex;
`;

export default RoomContent;
