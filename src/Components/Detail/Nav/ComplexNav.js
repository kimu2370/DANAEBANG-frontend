import React from "react";
import { FiHeart, FiPaperclip } from "react-icons/fi";
import styled from "styled-components";
import { complexNavData } from "Components/Detail/Nav/Data";

const ComplexNav = () => {
  return (
    <>
      <HiddenLink acitve></HiddenLink>
      <Container>
        <InfoBar>
          <Content>
            <ComplexName>
              <p>경기도 부천시 중동</p>
              <h1>신중동역헤리움메트로타워</h1>
            </ComplexName>
            <FavoritBtn>
              <FiHeart size={26} />
              <span>18</span>
            </FavoritBtn>
            <CopyBtn>
              <FiPaperclip size={20} color={"white"} />
            </CopyBtn>
          </Content>
        </InfoBar>
        <Tabs>
          {complexNavData.map((item, i) => (
            <Tab key={i} active>
              {item}
            </Tab>
          ))}
        </Tabs>
      </Container>
    </>
  );
};

export default ComplexNav;

const HiddenLink = styled.a`
  display: block;
  width: 100%;
  height: 0px;
`;
const Container = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 0px;
  right: auto;
  width: 100%;
  min-width: 1366px;
  position: relative;
`;
const InfoBar = styled.div`
  display: none;
  width: 100%;
  height: 90px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 7px 0px,
    rgba(0, 0, 0, 0.08) 0px 2px 2px 0px;
  background-color: rgb(35, 45, 74);
  position: relative;
  z-index: 3;
`;

const Content = styled.div`
  width: 1180px;
  height: 90px;
  position: relative;
  margin: 0px auto;
  ::after {
    display: block;
    content: "";
    clear: both;
  }
`;
const ComplexName = styled.div`
  float: left;
  height: 90px;
  margin-right: 20px;
  padding: 20px 0px;
  > p {
    color: rgb(255, 255, 255);
    opacity: 0.7;
    font-size: 14px;
    line-height: 20px;
  }
  > h1 {
    color: rgb(255, 255, 255);
    font-size: 22px;
    line-height: 31px;
  }
`;

const FavoritBtn = styled.div`
  float: left;
  height: 25px;
  padding-left: 32px;
  color: rgb(255, 255, 255);
  font-size: 15px;
  position: relative;
  top: 45px;
  cursor: pointer;
  span {
    position: relative;
    top: -6px;
    left: 6px;
  }
`;

const CopyBtn = styled.div`
  float: left;
  width: 15px;
  height: 25px;
  margin-top: 10px;
  color: rgb(255, 255, 255);
  position: relative;
  top: 37px;
  left: 30px;
  cursor: pointer;
`;

const Tabs = styled.div`
  width: 1180px;
  height: 53px;
  background-color: rgb(255, 255, 255);
  position: relative;
  z-index: 2;
  margin: 0px auto;
  > a {
    width: calc(20%);
  }
`;

const Tab = styled.a`
  display: inline-block;
  height: 53px;
  color: rgb(136, 136, 136);
  font-size: 15px;
  text-align: center;
  line-height: 53px;
  letter-spacing: -0.5px;
  cursor: pointer;
  /* color: rgb(34, 34, 34);
  border-bottom: 3px solid rgb(34, 34, 34); */
`;
