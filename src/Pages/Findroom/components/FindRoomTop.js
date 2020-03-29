import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as Totalsvg } from "SVG/totalsvg.svg";
import { ReactComponent as BottomArrow } from "SVG/bottomarrow.svg";
import { ReactComponent as SearchIcon } from "SVG/searchicon.svg";
import { ReactComponent as ResetIcon } from "SVG/reseticon.svg";

export default class FindRoomTop extends Component {
  render() {
    return (
      <FindroomTop>
        <TopWrap>
          <Toplist>
            <RoomSearch type="text" />
            <SearchIcon />
          </Toplist>
          <Toplist>
            <Selectorbox>
              <Selector>
                원룸, 투·쓰리룸, 오피스텔
                <BottomArrow />
              </Selector>
              <Selector>
                월세, 전세, 매매
                <BottomArrow />
              </Selector>
              <Selector>
                가격대
                <BottomArrow />
              </Selector>
              <Selector>
                관리비
                <BottomArrow />
              </Selector>
              <Selector>
                방크기
                <BottomArrow />
              </Selector>
              <Selector>
                준공년차
                <BottomArrow />
              </Selector>
              <Selector>
                추가필터
                <BottomArrow />
              </Selector>
            </Selectorbox>
          </Toplist>
          <Toplist>
            <Btn>
              <Totalsvg />
              전체필터
            </Btn>
            <Btn>
              <ResetIcon />
              초기화
            </Btn>
          </Toplist>
        </TopWrap>
      </FindroomTop>
    );
  }
}

const FindroomTop = styled.div`
  width: 100%;
  min-width: 1366px;
  height: 66px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  position: fixed;
  top: 66px;
  z-index: 10;
`;

const TopWrap = styled.ul`
  height: 66px;
`;
const Toplist = styled.li`
  height: 66px;
  line-height: 66px;
  border-left: 1px solid #eee;
  float: left;
  display: flex;
  align-items: center;
  position: relative;
  &:nth-of-type(1) {
    border-left: none;
    padding: 0 50px 0 30px;
  }
  &:nth-of-type(3) {
    float: right;
  }
  & svg {
    cursor: pointer;
    position: absolute;
    right: 20px;
  }
`;
const RoomSearch = styled.input`
  height: 60px;
  font-size: 16px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const Btn = styled.div`
  position: relative;
  cursor: pointer;
  &:nth-of-type(1) {
    padding: 0 18px 0 38px;
    border-right: 1px solid #eee;
    & svg {
      position: absolute;
      right: 77px;
      top: 21px;
    }
  }
  &:nth-of-type(2) {
    padding: 0 18px 0 36px;
    & svg {
      position: absolute;
      top: 21px;
      margin-left: -5px;
    }
  }
`;

const Selectorbox = styled.ul`
  height: 66px;
  padding: 20px;
  display: flex;
  align-items: center;
`;
const Selector = styled.li`
  margin-right: 10px;
  padding: 0 30px 0 12px;
  font-size: 14px;
  line-height: 36px;
  border: 1px solid rgba(224, 224, 224);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 245, 245);
    border-color: rgb(245, 245, 245);
  }
  & svg {
    stroke: rgb(34, 34, 34);
    position: absolute;
    top: 14px;
    right: 10px;
  }
`;
