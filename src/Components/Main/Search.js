import styled from "styled-components";

const SearchbarDiv = styled.div`
  text-align: center;
  width: 100%;
  min-width: 1366px;
  padding-top: 115px;
  padding-bottom: 113px;
`;

const BlueSpan = styled.span`
  font-size: 46px;
  font-weight: 300;
  color: #1463f9;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.8px;
`;

const Span = styled.span`
  font-size: 46px;
  font-weight: 300;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.8px;
`;

const P = styled.p`
  font-size: 46px;
  font-weight: 300;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.8px;
`;

const SearchWrapper = styled.div`
  width: 800px;
  height: 60px;
  background-color: rgb(255, 255, 255);
  position: relative;
  border: 1px solid rgb(96, 163, 255);
  border-image: initial;
  margin: 34px auto;
`;

const Input = styled.input`
  display: inline-block;
  width: 636px;
  height: 30px;
  color: rgb(34, 34, 34);
  font-size: 20px;
  border-top-style: initial;
  border-right-style: initial;
  border-bottom-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-bottom-color: initial;
  margin: 14px 110px 14px 54px;
  padding: 0px 20px;
  border-width: 0px 0px 0px 1px;
  border-image: initial;
  border-left: 1px solid rgb(221, 221, 221);
  outline: none;
`;

const FindRoom = styled.button`
  width: 95px;
  height: 48px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  line-height: 48px;
  letter-spacing: -0.3px;
  background-color: rgb(19, 116, 248);
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 2px;
  outline: none;
`;

export { SearchbarDiv, SearchWrapper, P, Span, FindRoom, Input, BlueSpan };
