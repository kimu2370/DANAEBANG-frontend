import React from "react";
import styled from "styled-components";

const RoomTable = props => {
  return (
    <div>
      <Box>
        <List>
          <Item>
            <Name>해당층/건물층</Name>
            <Value>1층/3층</Value>
          </Item>
        </List>
      </Box>
    </div>
  );
};

export default RoomTable;

const clearFix = `&::after {
  display: block;
  content: "";
  clear: both;
}`;

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
  &::before {
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
