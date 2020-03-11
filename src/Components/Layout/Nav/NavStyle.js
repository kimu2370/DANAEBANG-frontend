import styled from "styled-components";

const Navbar = styled.nav`
  width: 100%;
  min-width: 1366px;
  height: 70px;
  background-color: rgb(255, 255, 255);
  z-index: 21;
  padding: 0px 30px;
  border-bottom: 1px solid rgb(235, 235, 235);
  display: flex;
`;

const LeftDivFlex = styled.div`
  display: flex;
  width: 100%;
`;
const RightDivFlex = styled.div`
  display: flex;
  width: 70%;
  position: relative;
`;

const DividerDiv = styled.div`
  border-left: 2px solid rgb(221, 221, 221);
  margin: 10px 10px;
  height: 20px;
  display: flex;
  align-self: center;
`;

const RightDivWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

const NavLeftLinks = styled.p`
  display: flex;
  align-self: center;
  font-size: 14px;
  letter-spacing: -0.5px;
  color: rgb(136, 136, 136);
  font-weight: 400;
  line-height: 19px;
  &:hover {
    color: rgb(50, 108, 249);
    cursor: pointer;
  }
`;

const NavRightLinks = styled.p`
  width: 50%;
  align-self: center;
  font-size: 14px;
  letter-spacing: -0.5px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  &:hover {
    color: rgb(50, 108, 249);
    cursor: pointer;
  }
`;

export {
  Navbar,
  LeftDivFlex,
  RightDivFlex,
  DividerDiv,
  NavLeftLinks,
  NavRightLinks,
  RightDivWrapper
};
