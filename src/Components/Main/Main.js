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
import { easy_1 } from "./Image/easy_1.png";
import { easy_2 } from "./Image/easy_2.png";
import { easy_3 } from "./Image/easy_3.png";
import { easy_4 } from "./Image/easy_4.png";
import { easy_5 } from "./Image/easy_5.png";
import { easy_6 } from "./Image/easy_6.png";
import { easy_7 } from "./Image/easy_7.png";
import { easy_8 } from "./Image/easy_8.png";
import { easy_9 } from "./Image/easy_9.png";
import ImageCard from "./Category";

const SearchIcon = styled(Searchsvg)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 18px;
  height: 17px;
`;

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
            <ImageCard />
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
