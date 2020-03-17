import React, { Component } from "react";
import Layout from "Components/Layout/Layout";
import styled from "styled-components";
import { ReactComponent as Searchsvg } from "Components/Main/Image/search.svg";
import {
  SearchbarDiv,
  SearchWrapper,
  P,
  Span,
  FindRoom,
  Input,
  BlueSpan
} from "Components/Main/Search.js";
import { ReactComponent as easy_1 } from "Components/Main/Image/easy_1.png";

const SearchIcon = styled(Searchsvg)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 18px;
  height: 17px;
`;

// const CardImage = [
//   {
//     id: 1,
//     image: "/Image/easy_1.png",
//     category: "월세 + 관리비",
//     roomtype: "월 50 이하 원룸"
//   },
//   {
//     id: 2,
//     image: "/src/Components/Main/Image/easy_2.png",
//     category: "보증금",
//     roomtype: "500 이하 원룸"
//   },
//   {
//     id: 3,
//     image: "/src/Components/Main/Image/easy_3.png",
//     category: "반려동물",
//     roomtype: "가능한 원룸"
//   },
//   {
//     id: 4,
//     image: "/src/Components/Main/Image/easy_1.png",
//     category: "낭만적인",
//     roomtype: "옥탑방 원룸"
//   },
//   {
//     id: 5,
//     image: "/src/Components/Main/Image/easy_5.png",
//     category: "2억 이하",
//     roomtype: "전세 투쓰리룸"
//   },
//   {
//     id: 6,
//     image: "/src/Components/Main/Image/easy_6.png",
//     category: "전세자금대출",
//     roomtype: "가능한 투쓰리룸"
//   },
//   {
//     id: 7,
//     image: "/src/Components/Main/Image/easy_7.png",
//     category: "보증금",
//     roomtype: "1천이하 오피스텔"
//   },
//   {
//     id: 8,
//     image: "/src/Components/Main/Image/easy_8.png",
//     category: "단기임대",
//     roomtype: "가능한 오피스텔"
//   },
//   {
//     id: 9,
//     image: "/src/Component/Main/Image/easy_9.png",
//     category: "3억 이하",
//     roomtype: "전세 아파트"
//   }
// ];
export default class Main extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SearchbarDiv>
            <p>
              <BlueSpan>어떤 동네, 어떤 방</BlueSpan>
              <Span>에서</Span>
            </p>
            <P>살고 싶으신가요?</P>
            <SearchWrapper>
              <SearchIcon />
              <Input type="text" />
              <FindRoom>방 찾기</FindRoom>
            </SearchWrapper>
          </SearchbarDiv>
          <CategoryWrapper>
            <CategoryTextDiv>
              <CategorySpan>쉬운 방찾기</CategorySpan>
              <CategoryP>방 찾기 초보를 위한 초간단 솔루션!</CategoryP>
            </CategoryTextDiv>
            <CardWrapper>
              <CardView>
                <CardListWrapper>
                  <CardItem>
                    <FirstImage />
                  </CardItem>
                </CardListWrapper>
              </CardView>
            </CardWrapper>
          </CategoryWrapper>
        </Layout>
      </div>
    );
  }
}

const CategoryWrapper = styled.div`
  width: 1180px;
  position: relative;
  margin: 0px auto;
  border-top: 1px solid rgb(238, 238, 238);
`;

const CategoryTextDiv = styled.div`
  margin-top: 36px;
`;

const CategorySpan = styled.span`
  display: inline-block;
  width: 100%;
  color: rgb(34, 34, 34);
  font-size: 25px;
  font-weight: 500;
  line-height: 37px;
  text-align: center;
`;

const CategoryP = styled.p`
  display: block;
  color: rgb(102, 102, 102);
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 172px;
  margin-top: 26px;
  position: relative;
`;

const CardView = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const CardListWrapper = styled.div`
  width: 1777px;
  height: 172px;
  position: relative;
  right: 0px;
  transition: right 300ms ease-out 0s;
`;

const CardItem = styled.div`
  width: 185px;
  height: 172px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
`;

const FirstImage = styled.img`
  color: yellow;
  background-image: url(${easy_1});
`;
